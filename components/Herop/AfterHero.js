import React from 'react'
import Season from '../micro/Season'

const AfterHero = () => {
  return (
    <>
      <div className="flex flex-1 flex-col">
        <div className="flex 2xl:block flex-1 overflow-y-auto paragraph px-4">
          <div id="top">
            <div
              style={{
                zIndex: -1,
                position: "fixed",
                width: "100vw",
                height: "100vh",
              }}
            >
              <img
                src="sun-tornadod.png"
                className=""
                alt="Mountains with snow"
                layout="fill"
                objectfit="cover"
              />
            </div>

            <>
              <Season />
              {/* <Games /> */}
            </>


          </div>
        </div>
      </div>
    </>
  )
}

export default AfterHero