import { useState } from 'react';
import './App.css';
// import QRCode from "react-qr-code";
import { QRCodeCanvas } from 'qrcode.react';

const userDate = {
  nombre: '',
  apellido: '',
  coche: '',
  asiento: '',
};

function App() {

  const [data, setData] = useState(userDate);
  const [check, setCheck] = useState(false);
  const [qr, setQr] = useState(false);

  const handleOnChange = (e) => {
    // setData(e.target.value)
    const { value, name } = e.target;
    setData({ ...data, [name]: value })
    handleOperation();
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data)
    setQr(true);
  }

  const handleOperation = () => {
    if (data.nombre !== '' && data.apellido !== '' && data.coche !== '' ) {
      setCheck(true);
    }
  }

  const reset = () => {
    setCheck(false);
    setQr(false);
    setData(userDate)
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit} className='formularioQr'>
          <input
            className='textos'
            placeholder='Nombre'
            type='text'
            name='nombre'
            value={data.nombre}
            onChange={handleOnChange}
          />
          <input
            className='textos'
            type='text'
            placeholder='Apellido'
            name='apellido'
            value={data.apellido}
            onChange={handleOnChange}
          />
          <input
            className='textos'
            type='text'
            placeholder='Coche'
            name='coche'
            value={data.coche}
            onChange={handleOnChange}
          />
          <input
            className='textos'
            type='text'
            placeholder='Asiento'
            name='asiento'
            value={data.asiento}
            onChange={handleOnChange}
          />
          {check && <button type='submit' className='submit'>Generar QR</button>}
        </form>
        {qr &&
          <div className='QRcode'>
            <QRCodeCanvas value="https://reactjs.org/" />
            <button className='btn'>Descargar QR</button>
            <button onClick={reset} className='btn'>Generar un nuevo QR</button>
          </div>
        }
      </header>
    </div>
  );
}

export default App;
