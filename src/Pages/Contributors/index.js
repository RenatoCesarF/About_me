import React from 'react'
import './style.css';
import picpay from '../../assets/picpay.webp'
import pix from '../../assets/pix.webp'
import copyToClipboard from '../../utils/copyToClipboard';

export default function Contributors() {
  return (
    <div>
      <div className="back">
        <h1 className="collaborateTitle">You can collaborate by</h1>
        <div className="payMethodsDiv">
          <img src={pix} alt='Pix' className="pixImage"
            onClick={() => { copyToClipboard("00020126360014br.gov.bcb.pix0114+55679845827605204000053039865802BR5925Renato Cesar Ferreira Bar6009Sao Paulo62070503***63046D6A") }} />

          <img src={picpay} alt='PicPay' className="picpayImage"
            onClick={() => window.open('https://picpay.me/renatocesar')} />
        </div>
      </div>
    </div>
  )
}