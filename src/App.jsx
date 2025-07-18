import { useState } from 'react'
function App() {
  const [resCal, setResCal] = useState("")
  const [cal, setCal] = useState(false)
  const display = (value) => {
    if (cal) {
      setResCal(value)
      setCal(false)
    } else {
      setResCal(resCal => resCal === "SYNTAX ERROR!" ? value : resCal + value)
    }
  }
  const clearAll = () => {
    setResCal("")
    setCal(false)
  }
  const backSpace = () => {
    setResCal(resCal => resCal.slice(0, -1))
  }
  const evalExpr = () => {
    try {
      setResCal(eval(resCal).toString())
      setCal(true)
    } catch (erorr) {
      setResCal("SYNTAX ERROR!")
      setCal(true)
    }
  }
  return (
    <>
      <div className=" d-flex justify-content-center align-items-center bg-dark" style={{ height: "100vh" }}>
        <div className="row rounded-4 p-3 shadow bg-secondary" style={{ width: "500px" }}>
          <div className="col-12 d-flex justify-content-around align-items-center mt-3">
            <input value={resCal} type="text" className='form-control shadow' placeholder='0' style={{ textAlign: "right", height: "50px" }} readOnly />
          </div>
          <div className="col-12 d-flex justify-content-evenly align-items-center mt-4">
            <div onClick={() => display("7")} className='btn btn-lg btn-dark shadow text-light fw-bold' style={{ width: "60px" }}>7</div>
            <div onClick={() => display("8")} className='btn btn-lg btn-dark shadow text-light fw-bold' style={{ width: "60px" }}>8</div>
            <div onClick={() => display("9")} className='btn btn-lg btn-dark shadow text-light fw-bold' style={{ width: "60px" }}>9</div>
            <div onClick={() => display("/")} className='btn btn-lg btn-dark shadow text-light fw-bold ms-4' style={{ width: "80px" }}>÷</div>
          </div>
          <div className="col-12 d-flex justify-content-evenly align-items-center mt-4">
            <div onClick={() => display("4")} className='btn btn-lg btn-dark shadow text-light fw-bold' style={{ width: "60px" }}>4</div>
            <div onClick={() => display("5")} className='btn btn-lg btn-dark shadow text-light fw-bold' style={{ width: "60px" }}>5</div>
            <div onClick={() => display("6")} className='btn btn-lg btn-dark shadow text-light fw-bold' style={{ width: "60px" }}>6</div>
            <div onClick={() => display("*")} className='btn btn-lg btn-dark shadow text-light fw-bold ms-4' style={{ width: "80px" }}>×</div>
          </div>
          <div className="col-12 d-flex justify-content-evenly align-items-center mt-4">
            <div onClick={() => display("1")} className='btn btn-lg btn-dark shadow text-light fw-bold' style={{ width: "60px" }}>1</div>
            <div onClick={() => display("2")} className='btn btn-lg btn-dark shadow text-light fw-bold' style={{ width: "60px" }}>2</div>
            <div onClick={() => display("3")} className='btn btn-lg btn-dark shadow text-light fw-bold' style={{ width: "60px" }}>3</div>
            <div onClick={() => display("-")} className='btn btn-lg btn-dark shadow text-light fw-bold ms-4' style={{ width: "80px" }}>-</div>
          </div>
          <div className="row d-flex justify-content-evenly  align-items-center mt-4">
            <div className="col-9">
              <div className="col-12 d-flex justify-content-evenly align-items-center">
                <div onClick={clearAll} className='btn btn-lg btn-warning text-dark fw-bold shadow' style={{ width: "60px" }}>AC</div>
                <div onClick={() => display("0")} className="btn btn-lg btn-dark shadow text-light fw-bold" style={{ width: '60px' }}>0</div>
                <div onClick={() => display(".")} className="btn btn-lg btn-dark shadow text-light fw-bold" style={{ width: "60px" }}>.</div>
              </div>
              <div className="col-12 d-flex justify-content-evenly align-items-center mt-4">
                <div onClick={backSpace} className="btn btn-lg btn-dark text-danger fw-bold shadow text-center d-flex justify-content-center align-items-center" style={{ width: "100px", height: "60px" }}>Clear</div>
                <div onClick={evalExpr} className="btn btn-lg btn-dark text-success fw-bold shadow ms-4 d-flex justify-content-center align-items-center" style={{ width: "100px", height: "60px" }}>=</div>
              </div>
            </div>
            <div className='col-3'>
              <div onClick={() => display("+")} className="btn btn-lg btn-dark text-light fw-bold d-flex justify-content-center align-items-center shadow me-5" style={{ width: "80px", height: "150px" }}>+</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default App
