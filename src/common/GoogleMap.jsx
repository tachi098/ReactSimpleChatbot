const GoogleMap = () => {
    return (
        <div>
            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.325247592156!2d106.6641083138226!3d10.78638226196169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ed23c80767d%3A0x5a981a5efee9fd7d!2zNTkwIEPDoWNoIE3huqFuZyBUaMOhbmcgVMOhbSwgUGjGsOG7nW5nIDExLCBRdeG6rW4gMywgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1624202569747!5m2!1svi!2s" width="300" height="250" style={{ border: 0 }} loading="lazy"></iframe>
            <label>
                <span><b>Địa chỉ:</b> 590 Cách Mạng Tháng Tám, Phường 11, Quận 3, Thành phố Hồ Chí Minh</span><br/>
                <span><b>Số điên thoại:</b> 028 3846 0846</span>
            </label>
        </div>
    );
}

export default GoogleMap;