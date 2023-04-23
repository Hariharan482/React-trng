import React from 'react';
import './footer.style.css';
const Footer= () => {
        return (
            <>
                {/* <!--START :: FOOTER SECTION--> */}
                <section className='footerSection'>
                    <div className='heading'>
                        <h1>Contact Us</h1>
                        <h2>Our Sales Team will reach out to you ASAP!</h2>
                    </div>
                    <form id='contactForm'>
                        <div className='form-data'>
                            <label htmlFor='name'>Name</label>
                            <input type='text' id='name'/>
                        </div>
                        <div className='form-data'>
                            <label htmlFor='from'>Your Home Town</label>
                            <select className='form-options'  name='from'>
                                <option hidden>Choose</option>
                                <option value='Pollachi'>Pollachi</option>
                                <option value='Thanjavur'>Thanjavur</option>
                                <option value='Chidambaram'>Chidambaram</option>
                                <option value='Masinagudi'>Masinagudi</option>
                                <option value='Kumbakkonam'>Kumbakkonam</option>
                                <option value='Tirunalveli'>Tirunalveli</option>
                            </select>
                        </div>
                        <div className='form-data'>
                            <label htmlFor='to'>Where would you like to go?</label>
                            <select className='form-options'  name='to'>
                                <option hidden>Choose</option>
                                <option value='Pollachi'>Pollachi</option>
                                <option value='Thanjavur'>Thanjavur</option>
                                <option value='Chidambaram'>Chidambaram</option>
                                <option value='Masinagudi'>Masinagudi</option>
                                <option value='Kumbakkonam'>Kumbakkonam</option>
                                <option value='Tirunalveli'>Tirunalveli</option>
                            </select>
                        </div>
                        <div className='form-data'>
                            <label htmlFor='contact'>Contact Number</label>
                            <input type='number' id='contact'/>
                        </div>
                    </form>
                    <button type='button'>SUBMIT INTEREST</button>
                </section>
                {/* <!--END :: FOOTER SECTION--> */}
            </>
        )
}

export default Footer;