import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
type ScrollToTopProps = {
  children: React.ReactNode;
}; 
const ScrollToTop=({children}:ScrollToTopProps)=>{
  const location=useLocation()
  useEffect(()=>{
window.scrollTo({
  top:0,
  behavior: 'smooth'
})
  },[location])
return <>
{children}
</>
}

export default ScrollToTop;