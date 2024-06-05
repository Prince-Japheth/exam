
import { people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star, goldcard, platinumcard, blackcard, titaniumcard } from "../assets";


export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Rewards",
    content:
      "The best credit cards offer some tantalizing combinations of promotions and prizes",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Secured",
    content:
      "We take proactive steps make sure your information and transactions are secure.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Balance Transfer",
    content:
      "A balance transfer credit card can save you a lot of money in interest charges.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "User Active",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Transaction",
    value: "$230M+",
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];


export const bankingServices = [
  {
    title: 'Online Banking',
    description: 'Access your accounts, transfer funds, and pay bills conveniently online.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-currency-dollar" viewBox="0 0 16 16">
      <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z" />
    </svg>
  },
  {
    title: 'Mobile Banking',
    description: 'Manage your finances on the go with our mobile banking app.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
      <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
      <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
    </svg>
  },
  {
    title: 'ATM Services',
    description: 'Find nearby ATMs, withdraw cash, and check your account balance at any time.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-credit-card-2-back" viewBox="0 0 16 16">
      <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5z" />
      <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1m-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1" />
    </svg>
  },
  {
    title: 'Savings Accounts',
    description: 'Grow your money with competitive interest rates on our savings accounts.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-safe" viewBox="0 0 16 16">
      <path d="M1 1.5A1.5 1.5 0 0 1 2.5 0h12A1.5 1.5 0 0 1 16 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 1 14.5V13H.5a.5.5 0 0 1 0-1H1V8.5H.5a.5.5 0 0 1 0-1H1V4H.5a.5.5 0 0 1 0-1H1zM2.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5z" />
      <path d="M13.5 6a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5M4.828 4.464a.5.5 0 0 1 .708 0l1.09 1.09a3 3 0 0 1 3.476 0l1.09-1.09a.5.5 0 1 1 .707.708l-1.09 1.09c.74 1.037.74 2.44 0 3.476l1.09 1.09a.5.5 0 1 1-.707.708l-1.09-1.09a3 3 0 0 1-3.476 0l-1.09 1.09a.5.5 0 1 1-.708-.708l1.09-1.09a3 3 0 0 1 0-3.476l-1.09-1.09a.5.5 0 0 1 0-.708M6.95 6.586a2 2 0 1 0 2.828 2.828A2 2 0 0 0 6.95 6.586" />
    </svg>
  },
  {
    title: 'Mortgages',
    description: 'Get financing for your dream home, car, or personal needs with our flexible loan options.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-bank" viewBox="0 0 16 16">
      <path d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.5.5 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89zM3.777 3h8.447L8 1zM2 6v7h1V6zm2 0v7h2.5V6zm3.5 0v7h1V6zm2 0v7H12V6zM13 6v7h1V6zm2-1V4H1v1zm-.39 9H1.39l-.25 1h13.72z" />
    </svg>
  },
  {
    title: 'Investment Services',
    description: 'Plan for your future with our investment advisors and diverse investment options.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-kanban" viewBox="0 0 16 16">
      <path d="M13.5 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm-11-1a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
      <path d="M6.5 3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zm-4 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zm8 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z" />
    </svg>
  },
];


export const bankingCards = [
  {
    title: "Gold Credit Card",
    imageUrl: goldcard,
    description: "Enjoy luxury and privilege with our Gold Credit Card.",
    details: "Earn rewards points on every purchase. Access to airport lounges worldwide. Concierge service available 24/7."
  },
  {
    title: "Platinum Savings Card",
    imageUrl: platinumcard,
    description: "Maximize your savings with our Platinum Savings Card.",
    details: "High interest rates on savings. Exclusive access to financial planning services. Complimentary access to financial workshops."
  },
  {
    title: "Black Card",
    imageUrl: blackcard,
    description: "Experience unparalleled luxury and elite benefits with our prestigious Black Card.",
    details: "Enjoy exclusive perks such as priority access and elevate your lifestyle with a Black Card that reflects your status and sophistication."
  },
  {
    title: "Titanium Card",
    imageUrl: titaniumcard,
    description: "Elevate your financial experience with our Titanium Card, designed for those who appreciate exceptional rewards and premium services.",
    details: "Earn rewards points on every purchase, gain access to airport lounges worldwide, and enjoy dedicated customer support available 24/7. "
  },
];

export const banks = [
  {
    name: "YAFET Bank - Greenfield Branch",
    address: "456 Elm Avenue, Greenfield",
    imageUrl: "https://th.bing.com/th/id/OIG3.saT0AnG05nsnGJ7YCntu?pid=ImgGn",
    direction: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum maiores, dolorum harum eligendi, aliquam mollitia iure amet distinctio sint deleniti similique optio numquam odio magni vero, debitis natus doloremque blanditiis.",
  },
  {
    name: "YAFET Bank - Pinehurst Branch",
    address: "789 Pine Lane, Pinehurst",
    imageUrl: "https://th.bing.com/th/id/OIG3.uWI8jizGmH7TOU8BYWWy?pid=ImgGn",
    direction: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum maiores, dolorum harum eligendi, aliquam mollitia iure amet distinctio sint deleniti similique optio numquam odio magni vero, debitis natus doloremque blanditiis.",
  },
  {
    name: "YAFET Bank - Lakeview Branch",
    address: "202 Lake Avenue, Lakeview",
    imageUrl: "https://th.bing.com/th/id/OIG2.tABULuIscMrbBYb2z2Qy?pid=ImgGn",
    direction: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum maiores, dolorum harum eligendi, aliquam mollitia iure amet distinctio sint deleniti similique optio numquam odio magni vero, debitis natus doloremque blanditiis.",
  },
  {
    name: "YAFET Bank - Maplewood Branch",
    address: "101 Maple Street",
    imageUrl: "https://th.bing.com/th/id/OIG3.GP_clhQet2uqS0A24A7v?pid=ImgGn",
    direction: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum maiores, dolorum harum eligendi, aliquam mollitia iure amet distinctio sint deleniti similique optio numquam odio magni vero, debitis natus doloremque blanditiis.",
  },
  {
    name: "YAFET Bank - Sunnyvale Branch",
    address: "303 Sunny Road, Sunnyvale",
    imageUrl: "https://th.bing.com/th/id/OIG2.5uTo3WL27rZXyLjSDglq?pid=ImgGn",
    direction: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum maiores, dolorum harum eligendi, aliquam mollitia iure amet distinctio sint deleniti similique optio numquam odio magni vero, debitis natus doloremque blanditiis.",
  },
  {
    name: "YAFET Bank - Riverdale Branch",
    address: "123 River Street, Riverdale",
    imageUrl: "https://th.bing.com/th/id/OIG3.CzEzdFVV9eMv.cax_sqa?w=1024&h=1024&rs=1&pid=ImgDetMain",
    direction: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum maiores, dolorum harum eligendi, aliquam mollitia iure amet distinctio sint deleniti similique optio numquam odio magni vero, debitis natus doloremque blanditiis.",
  },
  {
    name: "YAFET Bank - Oakridge Branch",
    address: "404 Oak Drive, Oakridge, OR ",
    imageUrl: "https://th.bing.com/th/id/OIG2._yzAF_J_lMdX1VSYt2Mo?pid=ImgGn",
    direction: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum maiores, dolorum harum eligendi, aliquam mollitia iure amet distinctio sint deleniti similique optio numquam odio magni vero, debitis natus doloremque blanditiis.",
  },
  {
    name: "YAFET Bank - Brookside Branch",
    address: "505 Brook Street, Brookside",
    imageUrl: "https://th.bing.com/th/id/OIG3.LTTrLRMXxNm8kLiVuED6?pid=ImgGn",
    direction: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum maiores, dolorum harum eligendi, aliquam mollitia iure amet distinctio sint deleniti similique optio numquam odio magni vero, debitis natus doloremque blanditiis.",
  },
  {
    name: "YAFET Bank - Highland Branch",
    address: "606 Highland Blvd, Highland",
    imageUrl: "https://th.bing.com/th/id/OIG3.AXQCOLALMyAqyWoPv1SF?pid=ImgGn",
    direction: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum maiores, dolorum harum eligendi, aliquam mollitia iure amet distinctio sint deleniti similique optio numquam odio magni vero, debitis natus doloremque blanditiis.",
  },
  {
    name: "YAFET Bank - Greenfield Branch",
    address: "456 Elm Avenue, Greenfield",
    imageUrl: "https://th.bing.com/th/id/OIG3.saT0AnG05nsnGJ7YCntu?pid=ImgGn",
    direction: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum maiores, dolorum harum eligendi, aliquam mollitia iure amet distinctio sint deleniti similique optio numquam odio magni vero, debitis natus doloremque blanditiis.",
  },
  {
    name: "YAFET Bank - Pinehurst Branch",
    address: "789 Pine Lane, Pinehurst",
    imageUrl: "https://th.bing.com/th/id/OIG3.uWI8jizGmH7TOU8BYWWy?pid=ImgGn",
    direction: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum maiores, dolorum harum eligendi, aliquam mollitia iure amet distinctio sint deleniti similique optio numquam odio magni vero, debitis natus doloremque blanditiis.",
  },
  {
    name: "YAFET Bank - Lakeview Branch",
    address: "202 Lake Avenue, Lakeview",
    imageUrl: "https://th.bing.com/th/id/OIG2.tABULuIscMrbBYb2z2Qy?pid=ImgGn",
    direction: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum maiores, dolorum harum eligendi, aliquam mollitia iure amet distinctio sint deleniti similique optio numquam odio magni vero, debitis natus doloremque blanditiis.",
  },
  {
    name: "YAFET Bank - Maplewood Branch",
    address: "101 Maple Street",
    imageUrl: "https://th.bing.com/th/id/OIG3.GP_clhQet2uqS0A24A7v?pid=ImgGn",
    direction: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum maiores, dolorum harum eligendi, aliquam mollitia iure amet distinctio sint deleniti similique optio numquam odio magni vero, debitis natus doloremque blanditiis.",
  },
  {
    name: "YAFET Bank - Sunnyvale Branch",
    address: "303 Sunny Road, Sunnyvale",
    imageUrl: "https://th.bing.com/th/id/OIG2.5uTo3WL27rZXyLjSDglq?pid=ImgGn",
    direction: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum maiores, dolorum harum eligendi, aliquam mollitia iure amet distinctio sint deleniti similique optio numquam odio magni vero, debitis natus doloremque blanditiis.",
  },
  {
    name: "YAFET Bank - Riverdale Branch",
    address: "123 River Street, Riverdale",
    imageUrl: "https://th.bing.com/th/id/OIG3.CzEzdFVV9eMv.cax_sqa?w=1024&h=1024&rs=1&pid=ImgDetMain",
    direction: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum maiores, dolorum harum eligendi, aliquam mollitia iure amet distinctio sint deleniti similique optio numquam odio magni vero, debitis natus doloremque blanditiis.",
  },
  {
    name: "YAFET Bank - Oakridge Branch",
    address: "404 Oak Drive, Oakridge, OR ",
    imageUrl: "https://th.bing.com/th/id/OIG2._yzAF_J_lMdX1VSYt2Mo?pid=ImgGn",
    direction: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum maiores, dolorum harum eligendi, aliquam mollitia iure amet distinctio sint deleniti similique optio numquam odio magni vero, debitis natus doloremque blanditiis.",
  },
  {
    name: "YAFET Bank - Pinehurst Branch",
    address: "789 Pine Lane, Pinehurst",
    imageUrl: "https://th.bing.com/th/id/OIG3.uWI8jizGmH7TOU8BYWWy?pid=ImgGn",
    direction: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum maiores, dolorum harum eligendi, aliquam mollitia iure amet distinctio sint deleniti similique optio numquam odio magni vero, debitis natus doloremque blanditiis.",
  },
  {
    name: "YAFET Bank - Sunnyvale Branch",
    address: "303 Sunny Road, Sunnyvale",
    imageUrl: "https://th.bing.com/th/id/OIG2.5uTo3WL27rZXyLjSDglq?pid=ImgGn",
    direction: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum maiores, dolorum harum eligendi, aliquam mollitia iure amet distinctio sint deleniti similique optio numquam odio magni vero, debitis natus doloremque blanditiis.",
  },
  {
    name: "YAFET Bank - Greenfield Branch",
    address: "456 Elm Avenue, Greenfield",
    imageUrl: "https://th.bing.com/th/id/OIG3.saT0AnG05nsnGJ7YCntu?pid=ImgGn",
    direction: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum maiores, dolorum harum eligendi, aliquam mollitia iure amet distinctio sint deleniti similique optio numquam odio magni vero, debitis natus doloremque blanditiis.",
  },
  {
    name: "YAFET Bank - Maplewood Branch",
    address: "101 Maple Street",
    imageUrl: "https://th.bing.com/th/id/OIG3.GP_clhQet2uqS0A24A7v?pid=ImgGn",
    direction: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum maiores, dolorum harum eligendi, aliquam mollitia iure amet distinctio sint deleniti similique optio numquam odio magni vero, debitis natus doloremque blanditiis.",
  },
];


export const dashNav = [
  {
    name: 'Dashboard',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-columns"
      >
        <path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18" />
      </svg>
    ),
    href: '#',
  },
  {
    name: 'Credit & Loans',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 16 16"
        className="bi bi-cash-coin"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8m5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0"
        />
        <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195z" />
        <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083q.088-.517.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1z" />
        <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 6 6 0 0 1 3.13-1.567" />
      </svg>
    ),
    href: '#',
  },
  {
    name: 'Bills',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 16 16"
        className="bi bi-file-earmark-text"
        fill="currentColor"
      >
        <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5" />
        <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
      </svg>
    ),
    href: '#',
  },
  {
    name: 'Settings',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 16 16"
        className="bi bi-gear"
        fill="currentColor"
      >
        <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
        <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291a1.873 1.873 0 0 0-1.116-2.693l-.318-.094c-.835-.246-.835-1.428 0-1.674l.319-.094a1.873 1.873 0 0 0 1.115-2.692l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.291.159a1.873 1.873 0 0 0 2.693-1.116l.094-.318z" />
      </svg>
    ),
    href: '#',
  },
  {
    name: 'Security Center',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-shield-lock" viewBox="0 0 16 16">
        <path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56" />
        <path d="M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415" />
      </svg>
    ),
    href: '#',
  },
  {
    name: 'Help & Support',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
      </svg>
    ),
    href: '#',
  },
];

export const topChartRow = [
  {
    title: "Total Accounts Balance",
    value: "50 K",
    percentage: 75,
    color: "pink"
  },
  {
    title: "Monthly Transactions",
    value: "150 K",
    percentage: 50,
    color: "blue"
  },
  {
    title: "Savings Goals",
    value: "80 K",
    percentage: 90,
    color: "orange"
  }
];

export const payedBills = [
  {
    name: "Electricity",
    amount: 500,
    class: "progress-color electricity",
  },
  {
    name: "Gas",
    amount: 1000,
    class: "progress-color gas",
  },
  {
    name: "Medical Bills",
    amount: 1500,
    class: "progress-color medical-bills",
  },
  {
    name: "Rent",
    amount: 3000,
    class: "progress-color rent",
  },
];

export const recentTransactions = [
  {
    picture: "https://images.unsplash.com/photo-1562159278-1253a58da141?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzB8fHBvcnRyYWl0JTIwbWFufGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    name: "Eric Clampton",
    message: "Payment received: $200.00 from Eric Clampton.",
  },
  {
    picture: "https://images.unsplash.com/photo-1604004555489-723a93d6ce74?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80",
    name: "Jess Flax",
    message: "Payment sent: $150.00 to Jess Flax.",
  },
  {
    picture: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
    name: "Pam Halpert",
    message: "Payment sent: $150.00 to Pam Halpert.",
  },
];

export const notifications = [
  {
    iconcolor: "notification-icon warning",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
      </svg>
    ),
    message: "Your plan expires in 3 days.",
    action: "Renew Now",
  },
  {
    iconcolor: "notification-icon green",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-plus">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="12" y1="18" x2="12" y2="12" />
        <line x1="9" y1="15" x2="15" y2="15" />
      </svg>
    ),
    message: "New document uploaded: Account Statement.",
    action: "",
  },
  {
    iconcolor: "notification-icon deep-orange",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-minus">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="9" y1="15" x2="15" y2="15" />
      </svg>
    ),
    message: "Pending payment: Utility bill due in 5 days.",
    action: "Pay Now",
  },
  {
    iconcolor: "notification-icon orange",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle">
        <circle cx="12" cy="12" r="10" />
        <line x1="15" y1="9" x2="9" y2="15" />
        <line x1="9" y1="9" x2="15" y2="15" />
      </svg>
    ),
    message: "Transaction failed: Insufficient funds.",
    action: "",
  },
  {
    iconcolor: "notification-icon green",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-plus">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="12" y1="18" x2="12" y2="12" />
        <line x1="9" y1="15" x2="15" y2="15" />
      </svg>
    ),
    message: "Your checkbook is ready for pickup.",
    action: "",
  },
  {
    iconcolor: "notification-icon orange",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle">
        <circle cx="12" cy="12" r="10" />
        <line x1="15" y1="9" x2="9" y2="15" />
        <line x1="9" y1="9" x2="15" y2="15" />
      </svg>
    ),
    message: "Loan application denied: Credit score too low.",
    action: "",
  },
];