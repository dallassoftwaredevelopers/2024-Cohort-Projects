export default function PantryFormDataCalls() {
  const onSaveData = () => {
    console.log("Save data");
    const dummyData = {
      item: "banana",
      description: "fruit",
      quantity: 0,
      weight: "2oz",
      price: 0.58,
    };

    //TODO: Call Axios to save dummy data to the database
  };

  return (
    <div>
      <h1>Pantry Form Data Calls</h1>
      <button type="button" onClick={onSaveData}>
        Save
      </button>
    </div>
  );
}
