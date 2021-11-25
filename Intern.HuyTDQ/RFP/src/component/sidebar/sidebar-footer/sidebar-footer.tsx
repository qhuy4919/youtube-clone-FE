import './sidebar-footer.scss';
function SidebarFooter() {
  return (
    <div>
      <div className='footer-block'>
        <div>About Press Copyright</div>
        <div>Creators Advertise</div>
        <div>Developers +MyTube</div>
        <div>Legal</div>
      </div>
      <div className='footer-block'>
        <div>Terms Privacy</div>
        <div>Policy {'&'} Safety</div>
        <div>Test new features</div>
      </div>
      <div className='footer-block'>
        <div>All prices include VAT</div>
      </div>
      <div className='footer-block'>
        <div>&copy; Productioncoder.com - A Youtube clone for educational purposes under fair use.</div>
      </div>
    </div>
  );
}

export default SidebarFooter;
