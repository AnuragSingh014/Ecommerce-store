import React from 'react'

const Navbar = () => {
  return (
    <div className='w-screen text-xs font-[poppins]'>
      {/* // Small one */}
        <div className='w-full border-red-800 border-0 px-10'>
            <div className='flex border-blue-800 justify-between items-center border-0 '>
              <div className='flex'> 
                <img 
                  src="/public/mappin.svg"
                />
                <p className='pl-1 w-'>Store Location: Lincoln- 344 Illinois, Chicago, USA</p>
              </div>
              <div className='flex items-center'>
                
                <div className='flex px-1'>
                  Eng 
                  <img src="/public/svgdown.svg" 
                    className='pl-1'
                  />
                </div>
                
                <div className='flex pl-1'>
                  USD
                  <img src="/public/svgdown.svg" 
                    className='pl-1'
                  />
                </div>

                <div>
                  <img src="/public/devider.svg" className='px-2'/>
                </div>

                <div className='flex justify-between'>
                  <div> SignIn</div>
                  <div className='pl-1'> SignUp</div>
                </div>

              </div>
            </div>
        </div>

      {/* // Middle */}


      {/* //Navlinks */}
    </div>
  )
}

export default Navbar


// /* Contact */

// /* Auto layout */
// display: flex;
// flex-direction: row;
// align-items: center;
// padding: 0px;
// gap: 8px;

// margin: 0 auto;
// width: 315px;
// height: 18px;


// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;


// /* Map Pin */

// width: 15px;
// height: 18px;


// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;


// /* Vector */

// position: absolute;
// left: 0%;
// right: 95.24%;
// top: 0%;
// bottom: 0%;

// /* Gray Scale/Gray – 600 */
// border: 1px solid #666666;


// /* Vector */

// position: absolute;
// left: 1.59%;
// right: 96.83%;
// top: 27.27%;
// bottom: 45.45%;

// /* Gray Scale/Gray – 600 */
// border: 1px solid #666666;


// /* Store Location: Lincoln- 344, Illinois, Chicago, USA */

// width: 292px;
// height: 16px;

// /* Body Tiny/Body Tiny, 400 */
// font-family: 'Poppins';
// font-style: normal;
// font-weight: 400;
// font-size: 12px;
// line-height: 130%;
// /* identical to box height, or 16px */

// /* Gray Scale/Gray – 600 */
// color: #666666;


// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;
