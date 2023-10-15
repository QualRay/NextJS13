import Link from 'next/link';
import React from 'react'

function Footer() {
  
    const current_year = new Date().getFullYear();

    return (
   
          
          
            <div id="section_footer">
              <div className='text-center py-4'>
                <Link href="https://google.com" target="_blank" className='btn btn-link'>
                  Privacy
                </Link>
                <span>|</span>
                <Link href="https://google.com" target="_blank" className='btn btn-link'>
                  Terms
                </Link>
                <span>|</span>
                <Link href="mailto:Roads<rana@tansenberg.com>" className='btn btn-link'>
                  Contact
                </Link>
                <p>Copyright © {current_year}, Tansenberg LLC. All Rights Reserved.</p>
              </div>
            </div>
          );
        }


export default Footer;
