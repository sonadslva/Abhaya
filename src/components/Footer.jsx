import React from 'react'
import logo from "../assets/logo.png";
import { IoLogoInstagram } from "react-icons/io";
import { CiFacebook } from "react-icons/ci";
import { FiYoutube } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
const Footer = () => {
  return (
    <div>
        <div className="contact_details_footer bg-gray-100 p-10 flex justify-between">
              <div className="flex items-center ">
                <img src={logo} alt="Logo" className="w-[200px] h-[200px]" />
              </div>
    
              <div className="flex justify-between gap-[40px]">
                <div className="reach_out space-y-6">
                  <div className="office_details">
                    <label className="block text-lg font-medium text-gray-600">
                      Phone Number
                    </label>
                    <a
                      href="tel:+91-9048121977"
                      className="flex items-center text-green-600"
                    >
                      <svg
                        className="green_svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="Communication / Phone">
                          <path
                            id="Vector"
                            d="M9.50295 4.25722C9.19922 3.4979 8.46381 3 7.646 3H4.89474C3.8483 3 3 3.84834 3 4.89478C3 13.7895 10.2108 21 19.1055 21C20.1519 21 21 20.1518 21 19.1053L20.9999 16.354C20.9999 15.5362 20.5019 14.8009 19.7426 14.4971L17.1071 13.4429C16.4251 13.1701 15.6485 13.293 15.0842 13.7633L14.4031 14.3307C13.6084 14.9929 12.44 14.94 11.7085 14.2085L9.79136 12.2915C9.05993 11.5601 9.00722 10.3915 9.66943 9.59688L10.2368 8.91597C10.7071 8.35163 10.83 7.57493 10.5572 6.89286L9.50295 4.25722Z"
                            stroke="#DFB260"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </g>
                      </svg>
                      +91 - 90481 21977
                    </a>
                  </div>
                  <div className="office_details">
                    <label className="block text-lg font-medium text-gray-600">
                      Landline Number
                    </label>
                    <a
                      href="tel:+91-493-6231232"
                      className="flex items-center text-green-600"
                    >
                      <svg
                        className="green_svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="Communication / Phone">
                          <path
                            id="Vector"
                            d="M9.50295 4.25722C9.19922 3.4979 8.46381 3 7.646 3H4.89474C3.8483 3 3 3.84834 3 4.89478C3 13.7895 10.2108 21 19.1055 21C20.1519 21 21 20.1518 21 19.1053L20.9999 16.354C20.9999 15.5362 20.5019 14.8009 19.7426 14.4971L17.1071 13.4429C16.4251 13.1701 15.6485 13.293 15.0842 13.7633L14.4031 14.3307C13.6084 14.9929 12.44 14.94 11.7085 14.2085L9.79136 12.2915C9.05993 11.5601 9.00722 10.3915 9.66943 9.59688L10.2368 8.91597C10.7071 8.35163 10.83 7.57493 10.5572 6.89286L9.50295 4.25722Z"
                            stroke="#DFB260"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </g>
                      </svg>
                      +91-493-6231232
                    </a>
                  </div>
                </div>
    
                <div className="reach_out space-y-6">
                  <div className="office_details">
                    <label className="block text-lg font-medium text-gray-600">
                      E-mail
                    </label>
                    <a
                      href="mailto:abhayaayur@gmail.com"
                      target="_blank"
                      className="flex items-center text-green-600"
                    >
                      <svg
                        className="green_svg"
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 6.71326L12.2286 12.7133L19.9999 6.71326M21 8.91321V16.5132C21 17.6333 21.0002 18.1935 20.7822 18.6213C20.5905 18.9976 20.2841 19.3035 19.9078 19.4952C19.48 19.7132 18.9203 19.7133 17.8002 19.7133H6.2002C5.08009 19.7133 4.51962 19.7132 4.0918 19.4952C3.71547 19.3035 3.40973 18.9976 3.21799 18.6213C3 18.1935 3 17.6333 3 16.5132V8.91321C3 7.7931 3 7.23312 3.21799 6.8053C3.40973 6.42897 3.71547 6.12299 4.0918 5.93124C4.51962 5.71326 5.08009 5.71326 6.2002 5.71326H17.8002C18.9203 5.71326 19.48 5.71326 19.9078 5.93124C20.2841 6.12299 20.5905 6.42897 20.7822 6.8053C21.0002 7.23312 21 7.7931 21 8.91321Z"
                          stroke="#DFB260"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      abhayaayur@gmail.com
                    </a>
                  </div>
                  <div className="office_details">
                    <label className="block text-lg font-medium text-gray-600">
                      Corporate Office
                    </label>
                    <a
                      target="_blank"
                      href="https://maps.app.goo.gl/ZCdfsGXmAJxcQB329"
                      className="flex items-center text-green-600"
                    >
                      <svg
                        className="location_svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 9.9231C5 14.7749 9.24448 18.7872 11.1232 20.3255L11.1239 20.3261C11.3933 20.5466 11.5281 20.657 11.7288 20.7135C11.885 20.7575 12.1148 20.7575 12.271 20.7135C12.472 20.6569 12.6071 20.5464 12.877 20.3255C14.7557 18.7872 19 14.7749 19 9.92306C19 8.08695 18.2625 6.32605 16.9497 5.02772C15.637 3.72939 13.8566 3 12 3C10.1435 3 8.36301 3.72938 7.05025 5.02771C5.7375 6.32604 5 8.08698 5 9.9231Z"
                          stroke="#00A859"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M10 9C10 10.1046 10.8954 11 12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9Z"
                          stroke="#00A859"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      MANDAD ,MUTTIL SOUTH , WAYANAD
                    </a>
                  </div>
                </div>
              </div>
    
              <div>
                <div className="office_details">
                  <label className="block text-lg font-medium text-gray-600">
                    Follow Us On
                  </label>
                  <ul className="flex space-x-4">
                    <li>
                      <a href="#" target="_blank">
                        <CiFacebook />
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <IoLogoInstagram />
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <FiYoutube />
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <CiLinkedin />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            </div>
  )
}

export default Footer