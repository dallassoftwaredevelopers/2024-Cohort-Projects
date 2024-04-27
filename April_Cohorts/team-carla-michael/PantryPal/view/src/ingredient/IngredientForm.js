import {useState} from 'react';

function IngredientForm(styles) {
    const [name, setName] = useState("");
    const [measurement, setMeasurement] = useState("ounce");
    const [nutrients, setNutrients] = useState({});

    return (
        <div className={styles.formContainer}>
            <div className={styles.formHeader}>
                
            </div>

            <div className={styles.formInputs}>
                <form>

                </form>
            </div>
        </div>
    );
}