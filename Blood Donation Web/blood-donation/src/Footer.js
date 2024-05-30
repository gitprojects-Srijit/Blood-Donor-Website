import './App.css'
function Footer() {
    return (
        <>
            <footer>
                <div className="footer-items">
                    <div className="product">
                        <ul style={{ 'list-style': 'none' }}>
                            <li style={{ 'font-weight': 'bolder', 'font-size': '17px' }}>ABOUT</li>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Careers</li>
                            <li>Ecommerce Stories</li>
                            <li>Teams</li>
                            <li>Corporate Information</li>
                        </ul>
                    </div>
                    <div className="partner">
                        <ul style={{ 'list-style': 'none' }}>
                            <li style={{ 'font-weight': 'bolder', 'font-size': '17px' }}>PARTNER ORGANIZATIONS</li>
                            <li>Medlife</li>
                            <li>Apollo</li>
                        </ul>
                    </div>
                    <div className="news">
                        <ul style={{ 'list-style': 'none' }}>
                            <li style={{ 'font-weight': 'bolder', 'font-size': '17px' }}>HELP</li>
                            <li>Payments</li>
                            <li>Shippings</li>
                            <li>Orders</li>
                            <li>FAQ</li>
                            <li>Report Infrigement</li>
                        </ul>
                    </div>
                    <div className="news">
                        <ul style={{ 'list-style': 'none' }}>
                            <li style={{ 'font-weight': 'bolder', 'font-size': '17px' }}>CUSTOMER POLICY</li>
                            <li>Security</li>
                            <li>Privacy</li>
                            <li>Cancellations & Returns</li>
                            <li>Terms Of Use</li>
                            <li>Sitemap</li>
                            <li>Cookie Preferences</li>
                            <li>Customer Care Services</li>
                        </ul>
                    </div>
                </div>
                <div className='copy'>
                    <div class="copyright" style={{ padding: "8px" }}>
                        Copyright&#169;Ecommerce Store || All rights reserved
                    </div>
                </div>
            </footer>
        </>
    );
}
export default Footer;