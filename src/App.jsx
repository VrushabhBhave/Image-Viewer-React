import { useState } from "react";

function App() {
  const [src, setSrc] = useState("https://dummyimage.com/300x200/cccccc/000000&text=Select+an+Image");
  function setImage(value){
    setSrc(value);
  }

  return (
    <>
      <div className="container py-5 flex items-center m-auto flex-col">
        <span className="underline text-center block m-5">Click on an image!</span>
        <div className="image-container flex flex-wrap justify-center m-auto py-5">
          <div className="img">
            <img className="cat-img"
              src="https://imgs.search.brave.com/bAdI7a7qnuuOIJphttt3DfbzLnCU7ZDMtnkejXq6UII/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdDIu/ZGVwb3NpdHBob3Rv/cy5jb20vMTAwMDkz/OC81NDk5L2kvNDUw/L2RlcG9zaXRwaG90/b3NfNTQ5OTg2MTMt/c3RvY2stcGhvdG8t/Z2luZ2VyLWNhdC5q/cGc"
              alt="img1" onClick={(e) => setImage(e.target.src)}
            />
          </div>
          <div className="img">
            <img className="cat-img"
              src="https://imgs.search.brave.com/YzG9FgYN5qLWsiYyJ4dUEvxav9e98dBH0loR8YPRA1E/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTc0/ODc3NTY1L3Bob3Rv/L3BvcnRyYWl0LW9m/LWEtYnJvd24tY2F0/LWFnYWluc3QtYS1n/cmF5LWJhY2tncm91/bmQuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPWlGcFFNSzlF/aTIzVm9XcExLa2Zh/TFVtdXN5Y3VaWllV/OWtWMjNzT2F6YzQ9"
              alt="img2" onClick={(e) => setImage(e.target.src)}
            />
          </div>
          <div className="img">
            <img className="cat-img"
              src="https://imgs.search.brave.com/lZtf1S7JKFcaZs2lhxTpAtaJzTk_V35Xt8ys4htuVBU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/Y2F0LXBvc2VzLXBl/cmZlY3RseS5qcGc_/d2lkdGg9MTAwMCZm/b3JtYXQ9cGpwZyZl/eGlmPTAmaXB0Yz0w"
              alt="img3" onClick={(e) => setImage(e.target.src)}
            />
          </div>
          <div className="img">
            <img className="cat-img"
              src="https://imgs.search.brave.com/t6Nv0DwxoIACRxxtX2h7yt31ux5SCXHWgHVpoGh1diw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzM2Lzk5LzIy/LzM2MF9GXzIzNjk5/MjI4M19zTk94Q1ZR/ZUZMZDVwZHFhS0do/OERSR01aeTdQNFhL/bS5qcGc"
              alt="img4" onClick={(e) => setImage(e.target.src)}
            />
          </div>
        </div>
        <div className="result-container flex justify-center m-5">
          <div className="result-img rounded-2xl mx-10">
            <img  src={src} className="w-[100%] h-[100%] object-fill block rounded-2xl" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
