// import PropTypes from 'prop-types';
import { useRouter } from 'next/router'
import th from '../../public/locales/th/ResellerPage.json';
import en from '../../public/locales/en/ResellerPage.json';
import Link from 'next/link';
import Image from 'next/image';

const myLoader = ({src}:any) => {
    return `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/${src}`
}
const SmsSectionV3 = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'th' ? th : en;

    return(
        <div className="sms_section v2 ">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5">
                    <div className="newsletter_text">
                        <h3>
                            {t.SmsSection['Valuable prices at better rates than on the web page.']}
                        </h3>
                        <p>
                            {t.SmsSection['When you become a reseller, you will receive superior Special Rate prices that are suitable for Software House or Digital Agency businesses.']}
                        </p>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="newsletter_img">
                        {/* <img
                            className="lazyload"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-reseller01.png`}
                            alt="Image"
                        /> */}
                        <span className="lazyload">
                            <Image loader={myLoader} src="img-reseller01.png" alt="Image" width={100} height={100}/>
                        </span>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="sms_form v2">
                        <div className="row align-items-center">
                            <div className="col-lg-8 col-md-12">
                                <div className="sms_form_text">
                                    <h4>
                                        {t.SmsSection['Interested in becoming a ThaiBulkSMS reseller?']}
                                    </h4>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="sms_form_field">
                                    <Link href="/contact/">
                                        <a href={``} className="btn v8">
                                            {t.SmsSection['Request a quotation slip']}
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

// SmsSectionV3.getInitialProps = async () => ({
//     namespacesRequired: ['ResellerPage'],
// });

// SmsSectionV3.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default SmsSectionV3;
