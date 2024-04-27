import Nutrients from "./Nutrients";
import Convert from "./conversions/conversion.js";
import {useState} from 'react';

function MyIngredient(props) {
    const [amount, setAmount] = useState(props.data.amount);
    const [measurement, setMeasurement] = useState(props.data.measurement);
    const header = fixName(props.data.name);
    const oldMeasure = measurement;


    function fixName(name) {
        const split = name.split(', ');
        let heading = split[0];
        let subHeading = split.slice(1).join(", ");
        
        return {
          heading: heading,
          sub: subHeading
        }
    }

    function increment() {
      setAmount(amount + 1);
      changeAmount(true);
    }

    function decrement() {
      setAmount(amount - 1);
      changeAmount(false);
    }

    function changeMeasure(measure) {
      const newAmount = Convert(measure, oldMeasure, amount);

      async function convertAmount() {
        const url = "/fridge/ingredient/amount";
        const kv = [];

        kv.push(encodeURIComponent("ingredientID") + "=" + encodeURIComponent(props.data._id));
        kv.push(encodeURIComponent("amount") + "=" + encodeURIComponent(newAmount));
        kv.push(encodeURIComponent("measure") + "=" + encodeURIComponent(measure));
        const body = kv.join("&");
        
        await fetch(url, {
          method: "post",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: body
        }).catch((error) => {
          console.error(error);
          throw error;
        });
      }

      convertAmount();
      setAmount(newAmount);
      setMeasurement(measure);
    }

    async function changeAmount(counter) {
      let url = "/fridge/ingredient";
      if (counter) {
        url += "/inc";
      } else {
        url += "/dec";
      }
      
      const kvPair = [];
      const key = encodeURIComponent("ingredientID");
      const value = encodeURIComponent(props.data._id);
      kvPair.push(key + "=" + value);

      const post = async () => {
        await fetch(url, {
          method: "post",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: kvPair
        }).catch((error) => {
          throw error;
        });
      }

      post();
    }

    return (
        <div className="mr-2 mb-2 basis-1/4 bg-gray-300 p-4 rounded-lg space-y-2 animate-fade-down animate-delay-100">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">{header.heading}</h3>
              <p className="text-xs font-semibold">{header.sub}</p>
            </div>
            <div className="flex items-center">
              <button className="bg-gray-400 w-6 h-6 flex justify-center items-center mr-2" onClick={increment}>
                +
              </button>
              <button className="bg-gray-400 w-6 h-6 flex justify-center items-center mr-2" onClick={decrement}>
                -
              </button>
              <button className="bg-gray-400 w-6 h-6 flex justify-center items-center" onClick={decrement}>
                x
              </button>
            </div>
          </div>
          <p><span className="font-semibold">Measurement:</span> {measurement}</p>
          <p><span className="font-semibold">Amount:</span> {amount} {measurement}s</p>
          <Nutrients data={props.data} measure={measurement} setMeasure={changeMeasure}/>
        </div> 
    );
}

export default MyIngredient;