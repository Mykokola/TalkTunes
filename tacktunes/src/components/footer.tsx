import Link from "next/link";

export const Footer = () => (
  <footer id="Contact" className="container pb-24 flex  gap-9 pt-32  items-center justify-center">
    <Link href="https://github.com/Mykokola">
       <img className=" w-8 h-8" src="github-mark.png" alt="" />
    </Link>
    <Link href="https://www.instagram.com/_koll___/">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
      >
        <path
          d="M21.7209 0H8.27874C3.71384 0 0 3.71402 0 8.27892V21.7211C0 26.2862 3.71384 30 8.27874 30H21.7209C26.2862 30 30 26.286 30 21.7211V8.27892C30.0002 3.71402 26.2862 0 21.7209 0ZM27.3384 21.7211C27.3384 24.8185 24.8185 27.3383 21.7211 27.3383H8.27874C5.18153 27.3384 2.66175 24.8185 2.66175 21.7211V8.27892C2.66175 5.18171 5.18153 2.66175 8.27874 2.66175H21.7209C24.8183 2.66175 27.3383 5.18171 27.3383 8.27892V21.7211H27.3384Z"
          fill="#21243D"
        />
        <path
          d="M15 7.27014C10.7375 7.27014 7.26978 10.7379 7.26978 15.0004C7.26978 19.2627 10.7375 22.7303 15 22.7303C19.2625 22.7303 22.7303 19.2627 22.7303 15.0004C22.7303 10.7379 19.2625 7.27014 15 7.27014ZM15 20.0683C12.2054 20.0683 9.93152 17.7949 9.93152 15.0002C9.93152 12.2054 12.2052 9.93171 15 9.93171C17.7948 9.93171 20.0685 12.2054 20.0685 15.0002C20.0685 17.7949 17.7947 20.0683 15 20.0683Z"
          fill="#21243D"
        />
        <path
          d="M23.0545 5.01318C22.5417 5.01318 22.0379 5.2208 21.6757 5.58457C21.3118 5.94657 21.1025 6.45053 21.1025 6.96513C21.1025 7.47814 21.3119 7.98192 21.6757 8.34569C22.0377 8.70769 22.5417 8.91708 23.0545 8.91708C23.5691 8.91708 24.0713 8.70769 24.435 8.34569C24.7988 7.98192 25.0064 7.47796 25.0064 6.96513C25.0064 6.45053 24.7988 5.94657 24.435 5.58457C24.073 5.2208 23.5691 5.01318 23.0545 5.01318Z"
          fill="#21243D"
        />
      </svg>
    </Link>
    <Link href="https://www.linkedin.com/in/mykola-vladymyrskiy-2272b1278/">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
      >
        <path
          d="M25.6055 0H4.39453C1.97159 0 0 1.97159 0 4.39453V25.6055C0 28.0284 1.97159 30 4.39453 30H25.6055C28.0284 30 30 28.0284 30 25.6055V4.39453C30 1.97159 28.0284 0 25.6055 0ZM10.6055 23.7891H7.08984V11.4844H10.6055V23.7891ZM10.6055 9.72656H7.08984V6.21094H10.6055V9.72656ZM22.9102 23.7891H19.3945V16.7578C19.3945 15.7887 18.6058 15 17.6367 15C16.6676 15 15.8789 15.7887 15.8789 16.7578V23.7891H12.3633V11.4844H15.8789V12.147C16.7999 11.8607 17.3982 11.4844 18.5156 11.4844C20.8999 11.4869 22.9102 13.6258 22.9102 16.1536V23.7891Z"
          fill="#21243D"
        />
      </svg>
    </Link>
  </footer>
);
