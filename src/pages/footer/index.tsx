import Logo from "../../../public/images/Logo.png"

function Footer() {
    return (
        <footer className="bg-primary-100 py-2 md:py-16">
            <div className="justify-content mx-auto w-5/6 md:flex gap-16">
                <div className="mt-10 basis-1/2 md:mt-0">
                    <img src={Logo} alt="Logo" />
                    <p className="mt-3 mb-1">
                        Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
                        purus et arcu massa dictum condimentum. Augue scelerisque iaculis
                        orci ut habitant laoreet. Iaculis tristique.
                    </p>
                    <p>
                        © Evogym All Rights Reserved.
                    </p>
                </div>
                <div className="mt-10 basis-1/4 md:mt-0">
                    <h4 className="font-bold mb-3">Links</h4>
                    <p className="my-1">Massa orci senectus</p>
                    <p className="my-1">Et gravida id et etiam</p>
                    <p>Ullamcorper vivamus</p>
                </div>
                <div className="mt-10 pb-5 md:pb-0 basis-1/4 md:mt-0">
                    <h4 className="font-bold mb-3">Contact Us</h4>
                    <p className="my-1">Tempus metus mattis risus volutpat egestas.</p>
                    <p>(333)425-6825</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;