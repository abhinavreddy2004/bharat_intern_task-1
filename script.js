function convertTemperature() {
    const inputTemperature = parseFloat(document.getElementById('inputTemperature').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const resultElement = document.getElementById('result');

    if (isNaN(inputTemperature)) {
        resultElement.textContent = 'Please enter a valid number.';
        return;
    }

    let convertedTemperature;
    if (fromUnit === 'celsius') {
        convertedTemperature = (inputTemperature * 9/5) + 32;
        resultElement.textContent = `${inputTemperature}°C is equal to ${convertedTemperature.toFixed(2)}°F.`;
    } else {
        convertedTemperature = (inputTemperature - 32) * 5/9;
        resultElement.textContent = `${inputTemperature}°F is equal to ${convertedTemperature.toFixed(2)}°C.`;
    }
}
