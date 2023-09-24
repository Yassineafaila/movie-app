import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
      <footer className="d-flex align-items-center justify-content-center gap-2 border-0 border-top py-4">
          <p className='fw-bold'>Done by Me :</p>
      <Link to="https://github.com/Yassineafaila" className='fw-bold'>@Yassine Afaila</Link>
    </footer>
  );
}

export default Footer