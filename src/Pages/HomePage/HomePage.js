import './HomePage.css'
import { useNavigate } from 'react-router-dom'
import './bootstrap/css/bootstrap.min.css'
import './bootstrap-icons/bootstrap-icons.css'
import './boxicons/css/boxicons.min.css'
import './glightbox/css/glightbox.min.css'
import './swiper/swiper-bundle.min.css'
// import './aos/aos.css'
import './animate.css/animate.min.css'
import './fontawesome-free/css/all.min.css'
import { useState } from 'react'
import { db } from '../../firebase-config'
import { collection, addDoc, getDocs, deleteDoc, updateDoc, doc } from "firebase/firestore";
import { useEffect } from "react";




function HomePage() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [dname, setDname] = useState("");
    const [docname, setDocname] = useState("");
    const [message, setMessage] = useState("");
    const [members, setMembers] = useState([]);

    useEffect(() => {
        getMembers();
    }, []);

    const addMember = async () => {

        const docRef = await addDoc(collection(db, "appointment"), {
            name: name,
            email: email,
            phone: phone,
            date: date,
            dname: dname,
            docname: docname,
            message: message
        }).then(() => {
            alert("Route added successfully !");
            addMember();

        }).catch(() => {
            alert("Route not added !")
        });
    }

    const getMembers = async () => {
        const querySnapshot = await getDocs(collection(db, "appointment"));
        setMembers(querySnapshot.docs.map((doc) => ({
            ...doc.data()
        })));
    }

    const navigate = useNavigate();

    const heheHe = () => {
        navigate("/details")
    }

    return (
        <div>
            <div id="topbar" class="d-flex align-items-center fixed-top">
                <div class="container d-flex align-items-center justify-content-center justify-content-md-between">
                    <div class="align-items-center d-none d-md-flex">
                        <i class="bi bi-clock"></i> 24 Hrs Open !
                    </div>
                    <div class="d-flex align-items-center">
                        <i class="bi bi-phone"></i> Call us now +94 77 292 7874
                    </div>
                </div>
            </div>

            <header id="header" class="fixed-top">
                <div class="container d-flex align-items-center">

                    <a href="index.html" class="logo me-auto"><div class="hehehe1">EASY Health Care</div></a>



                    <nav id="navbar" class="navbar order-last order-lg-0">
                        <ul>
                            <li><a class="nav-link scrollto " href="#hero">Home</a></li>
                            <li><a class="nav-link scrollto" href="#about">About</a></li>
                            <li><a class="nav-link scrollto" href="#services">Services</a></li>
                            <li><a class="nav-link scrollto" href="#doctors">Doctors</a></li>
                            <li><a class="nav-link scrollto" href="#appointment">Appoinment</a></li>
                            <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
                        </ul>
                        <i class="bi bi-list mobile-nav-toggle"></i>
                    </nav>
                    <a href="#appointment" onClick={heheHe} class="appointment-btn scrollto"><span class="d-none d-md-inline">More</span> Details</a>
                    {/* <a href="#appointment" class="appointment-btn scrollto"><span class="d-none d-md-inline">Make an</span> Appointment</a> */}

                </div>
            </header>

            <section id="hero">
                <div id="heroCarousel" data-bs-interval="5000" class="carousel slide carousel-fade" data-bs-ride="carousel">

                    <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>

                    <div class="carousel-inner" role="listbox">


                        <div class="carousel-item active" >
                            <div class="container">
                                <h2>Welcome to <span>Easy Health Care    </span></h2>
                                <p>Our Purpose is to ensure that everyone in our community has the opportunity to be as they can be. We work with our community partners and the public itself to create a living enviroment where healthy options are accessible to everyone.</p>
                                <a href="#about" class="btn-get-started scrollto">Read More</a>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            <section id="ccc1">
                <div class="ccc2">
                    <h2 class="ccc4">OUR MISSION </h2>
                    <p class="ccc6">Is the Marion ia a healthy place to live, work, and play.</p>
                </div>
                <div class="ccc3">
                    <h2 class="ccc5">OUR VISSION</h2>
                    <p class="ccc7">Is to create a culture of health by providing all people with the oppurunity to reach their greatest health potntial at every stage of life. </p>
                </div>
            </section>

            <main id="main">


                <section id="featured-services" class="featured-services">
                    <div class="container" data-aos="fade-up">

                        <div class="row">
                            <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
                                    <div class="icon"><i class="fas fa-heartbeat"></i></div>
                                    <h4 class="title"><a href="">SPECIALIST </a></h4>
                                    <p class="description">we our providing care for those who are with specefic medical conditions or illness.</p>
                                </div>
                            </div>

                            <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
                                    <div class="icon"><i class="fas fa-pills"></i></div>
                                    <h4 class="title"><a href="">PHARMACY</a></h4>
                                    <p class="description">Our responsible is to provision of drug theory and for the purpose of archiveing definte therapeutic outcomes that improve the patients quality of life.</p>
                                </div>
                            </div>

                            <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                <div class="icon-box" data-aos="fade-up" data-aos-delay="300">
                                    <div class="icon"><i class="fas fa-thermometer"></i></div>
                                    <h4 class="title"><a href="">PRIMARY CARE</a></h4>
                                    <p class="description">Provision of primarily preventive healthcare services by PCP's as well as the coordination of care for members with manageable chronic conditions. </p>
                                </div>
                            </div>

                            <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                <div class="icon-box" data-aos="fade-up" data-aos-delay="400">
                                    <div class="icon"><i class="fas fa-dna"></i></div>
                                    <h4 class="title"><a href="">LABORATORY</a></h4>
                                    <p class="description">Facilities providing a wide range of laboratory procedures which aid the physicians in carrying out the diagnosis,treatment and management of patients.</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>


                <section id="cta" class="cta">
                    <div class="container" data-aos="zoom-in">

                        <div class="text-center">
                            <h3>In an emergency? Need help now?</h3>
                            <p>Upper Back Treatment Flexible Sigmoidoscopy Treatment Hip Fracture - ORIF Treatment Ganglion Cysts - Foot - Podiatry Treatment Metabolic Syndrome Treatment Thumb CMC Arthroplasty - Thumb Joint Reconstruction Treatment Pericarditis - Inflammation of the Heart Sac Treatment Carcinoid Cancer Treatment Post Traumatic Stress Disorder (PTSD) Treatment Allergies Treatment High Blood Pressure - Hypertension (HTN) Treatment Thyroid Cancer Treatment Coronary Artery Disease (CAD) - Clogging of Heart Arteries Treatment Thigh and Buttock Lift - Thighplasty Treatment Middle Ear Infection - Otitis Media Treatment Pediatrics - Moles Treatment Gallbladder Disease/Gallstones Treatment Cheek Implants Treatment Newborn Hearing Screening Treatment Sacroiliac Joint Pain - Chiropractic Treatment Treatment Athletes Foot Treatment Obesity & Sleep: Obesity Hypoventilation Syndrome (OHS) Treatment Rectal Cancer Treatment Gastroenteritis Treatment Premature Infant Retinal Disorder- Retinopathy of Prematurity (ROP) Treatment Preparing for Surgery Treatment Earwax Blockage Treatment Sciatica Treatment Ganglion Cysts - Wrist and hand lumps and bumps Treatment</p>
                            <a class="cta-btn scrollto" href="#appointment">Make Appointment</a>
                        </div>

                    </div>
                </section>


                <section id="about" class="about">
                    <div class="container" data-aos="fade-up">

                        <div class="section-title">
                            <h2>About Us</h2>
                            <p>Easy Health Care is a Medical Consultation leader providing Easy Care consultation service in all areas of medicine, including radiology.Utilizing the power of the internet, we are connecting patients around the globe with some of the world's best doctors.Thanks to our proprietary patent-pending cloud technology, getting a solution is now available at your finger tips. We made it possible for anyone to receive a healthcare in the privacy of the home or office. We are staffed with renowned specialists, who are equipped with the latest and most comprehensive technology and data. Our specialists are able to give you the most reliable second opinion as well as keep you up-to-date on groundbreaking developments and research in their fields of expertise.</p>
                        </div>

                        <div class="row">
                            <div class="col-lg-6" data-aos="fade-right">
                                <img src="./img/features.jpg" class="img-fluid" alt="" />
                            </div>
                            <div class="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left">
                                <h3>Total Health Care Solution</h3>
                                <p class="fst-italic">
                                    We are specialists in health care and recruitment of care professionals. We have a great reputation in recruiting and providing the best staff both for short and long term contracts. Our high quality, bespoke care services are delivered to adults, children and young people with varying conditions including personal healthcare, learning disabilities and mental health requirements.
                                </p>
                                <ul>
                                    <li><i class="bi bi-check-circle"></i> Who we are ?</li>
                                    <li><i class="bi bi-check-circle"></i> What we do ?</li>
                                    <li><i class="bi bi-check-circle"></i> Where we work ?</li>
                                </ul>
                                <p>
                                    Unlike many other care providers, Total Healthcare Solutions is a family run business managed by experienced healthcare professionals.
                                    Total Healthcare Solutions provides high quality Nurses, Healthcare Assistants and other healthcare professionals to private sector
                                    including private hospitals, care homes and home care.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>


                <section id="counts" class="counts">
                    <div class="container" data-aos="fade-up">

                        <div class="row no-gutters">

                            <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                                <div class="count-box">
                                    <i class="fas fa-user-md"></i>
                                    <span data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="1" class="purecounter"></span>

                                    <p><strong>Doctors</strong> they treat patients to ensure that they have the best possible care.</p>
                                    <a href="#">Find out more &raquo;</a>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                                <div class="count-box">
                                    <i class="far fa-hospital"></i>
                                    <span data-purecounter-start="0" data-purecounter-end="26" data-purecounter-duration="1" class="purecounter"></span>
                                    <p><strong>Departments</strong> In srilanka division we are having the largest organization.</p>
                                    <a href="#">Find out more &raquo;</a>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                                <div class="count-box">
                                    <i class="fas fa-flask"></i>
                                    <span data-purecounter-start="0" data-purecounter-end="14" data-purecounter-duration="1" class="purecounter"></span>
                                    <p><strong>Research Lab</strong> spaces indicated to execute experimental tasks which may aim for new discoveries and advances in science. They are also used to perform quality control and optimization of processes prior to industrial implementation.</p>
                                    <a href="#">Find out more &raquo;</a>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                                <div class="count-box">
                                    <i class="fas fa-award"></i>
                                    <span data-purecounter-start="0" data-purecounter-end="150" data-purecounter-duration="1" class="purecounter"></span>
                                    <p><strong>Awards</strong> Global Performance Excellence Award</p>
                                    <a href="#">Find out more &raquo;</a>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>


                <section id="features" class="features">
                    <div class="container" data-aos="fade-up">

                        <div class="row">
                            <div class="col-lg-6 order-2 order-lg-1" data-aos="fade-right">
                                <div class="icon-box mt-5 mt-lg-0">
                                    <i class="bx bx-receipt"></i>
                                    <h4>Laboratory</h4>
                                    <p>provides controlled conditions in which scientific or technological research, experiments, and measurement may be performed.</p>
                                </div>
                                <div class="icon-box mt-5">
                                    <i class="bx bx-cube-alt"></i>
                                    <h4>Arround Srilanka</h4>
                                    <p>Are organizations are all across Sri lanka as we provide our best care to the patients.</p>
                                </div>
                                <div class="icon-box mt-5">
                                    <i class="bx bx-images"></i>
                                    <h4>Gallery</h4>
                                    <p>Some images of our hospital on how we build.</p>
                                </div>
                                <div class="icon-box mt-5">
                                    <i class="bx bx-shield"></i>
                                    <h4>Safety</h4>
                                    <p>keeping patients safe in hospital is making sure they get the right treatment and do not pick up infections, have falls, take the wrong medication</p>
                                </div>
                            </div>
                            <div class="image col-lg-6 order-1 order-lg-2 hehe1">
                                <img src="./img/features1.jpg" />
                            </div>
                            {/* <div class="image col-lg-6 order-1 order-lg-2" style='background-image: url("assets/img/features.jpg");' data-aos="zoom-in"></div> */}
                        </div>

                    </div>
                </section>


                <section id="services" class="services services">
                    <div class="container" data-aos="fade-up">

                        <div class="section-title">
                            <h2>Service</h2>
                            <p>Urgent and emergency medical care is provided patients with sudden illness with serveand those affected by accudents, provides health care to the greatest extent possible  in the place of the call during transportation and hospitalization.
                                <br/>
                                Every individual, in our opinion, deserves to be treated with the greatest respect and regard. Thus, at Easy Health Care, we are concerned for our patients. We are sympathetic to their worried and worried families. We are concerned about how our team works together to give our patients the finest treatment possible. We will be honest, sympathetic, and sensitive because we care to change the lives we touch!
                            </p>
                        </div>

                    </div>
                </section>


                <section id="appointment" class="appointment section-bg">
                    <div class="container" data-aos="fade-up">

                        <div class="section-title">
                            <h2>Make an Appointment</h2>
                            <p>Make an appointment with us... Appointment scheduling solution with self check-in and mobile tickets, patients can even check themselves in upon arrival, without any interaction</p>
                        </div>

                        <form onSubmit={addMember} class="php-email-form" >
                            <div class="row">
                                <div class="col-md-4 form-group">
                                    <input onChange={(e) => setName(e.target.value)} type="text" name="name" class="form-control" id="name" placeholder="Your Name" required />
                                </div>
                                <div class="col-md-4 form-group mt-3 mt-md-0">
                                    <input onChange={(e) => setEmail(e.target.value)} type="email" class="form-control" name="email" id="email" placeholder="Your Email" required />
                                </div>
                                <div class="col-md-4 form-group mt-3 mt-md-0">
                                    <input onChange={(e) => setPhone(e.target.value)} type="tel" class="form-control" name="phone" id="phone" placeholder="Your Phone" required />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4 form-group mt-3">
                                    <input onChange={(e) => setDate(e.target.value)} type="datetime" name="date" class="form-control datepicker" id="date" placeholder="Appointment Date" required />
                                </div>
                                <div class="col-md-4 form-group mt-3">
                                    <input onChange={(e) => setDname(e.target.value)} type="datetime" name="date" class="form-control datepicker" id="date" placeholder="Department Name" required />
                                </div>
                                <div class="col-md-4 form-group mt-3">
                                    <input onChange={(e) => setDocname(e.target.value)} type="datetime" name="date" class="form-control datepicker" id="date" placeholder="Doctor Name" required />
                                </div>
                            </div>

                            <div class="form-group mt-3">
                                <textarea onChange={(e) => setMessage(e.target.value)} class="form-control" name="message" rows="5" placeholder="Message (Optional)"></textarea>
                            </div>
                            <div class="my-3">
                                <div class="loading">Loading</div>
                                <div class="error-message"></div>
                                <div class="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                            </div>
                            <div class="text-center"><button type="submit">Make an Appointment</button></div>
                        </form>

                    </div>
                </section>


                <section id="doctors" class="doctors section-bg">
                    <div class="container" data-aos="fade-up">

                        <div class="section-title">
                            <h2>Doctors</h2>
                            <p>If your health problem is more specific, you may need to see a medical doctor who specialises in a particular area of health. explain your health problem to the specialist. If you have a chronic or ongoing medical problem, a medical specialist might become a part of your ongoing healthcare team.</p>
                        </div>

                        <div class="row">

                            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                                <div class="member" data-aos="fade-up" data-aos-delay="100">
                                    <div class="member-img">
                                        <img src="./img/doctors/doc1.jfif" class="img-fluid" alt="" />
                                        <div class="social">
                                            <a href=""><i class="bi bi-twitter"></i></a>
                                            <a href=""><i class="bi bi-facebook"></i></a>
                                            <a href=""><i class="bi bi-instagram"></i></a>
                                            <a href=""><i class="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                    <div class="member-info">
                                        <h4>Dayan Rajapakse</h4>
                                        <span>Chief Medical Officer</span>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                                <div class="member" data-aos="fade-up" data-aos-delay="200">
                                    <div class="member-img">
                                        <img src="./img/doctors/doc2.jfif" class="img-fluid" alt="" />
                                        <div class="social">
                                            <a href=""><i class="bi bi-twitter"></i></a>
                                            <a href=""><i class="bi bi-facebook"></i></a>
                                            <a href=""><i class="bi bi-instagram"></i></a>
                                            <a href=""><i class="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                    <div class="member-info">
                                        <h4>Mohamed Abdhul Rahaman</h4>
                                        <span>Anesthesiologist</span>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                                <div class="member" data-aos="fade-up" data-aos-delay="300">
                                    <div class="member-img">
                                        <img src="./img/doctors/doc3.jfif" class="img-fluid" alt="" />
                                        <div class="social">
                                            <a href=""><i class="bi bi-twitter"></i></a>
                                            <a href=""><i class="bi bi-facebook"></i></a>
                                            <a href=""><i class="bi bi-instagram"></i></a>
                                            <a href=""><i class="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                    <div class="member-info">
                                        <h4>Ravindu Udith Ishara</h4>
                                        <span>Cardiology</span>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                                <div class="member" data-aos="fade-up" data-aos-delay="400">
                                    <div class="member-img">
                                        <img src="./img/doctors/me.jpg" class="img-fluid" alt="" />
                                        <div class="social">
                                            <a href=""><i class="bi bi-twitter"></i></a>
                                            <a href=""><i class="bi bi-facebook"></i></a>
                                            <a href=""><i class="bi bi-instagram"></i></a>
                                            <a href=""><i class="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                    <div class="member-info">
                                        <h4>Chamika Srimantha</h4>
                                        <span>Neurosurgeon</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>


                <section id="gallery" class="gallery">
                    <div class="container" data-aos="fade-up">

                        <div class="section-title">
                            <h2>Gallery</h2>
                            {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
                        </div>

                        <div class="gallery-slider swiper">
                            <div class="swiper-wrapper align-items-center">
                                <div class="swiper-slide"><a class="gallery-lightbox" href=""><img src="./img/gallery/gal1.jfif" class="img-fluid" alt="" /></a></div>
                                <div class="swiper-slide"><a class="gallery-lightbox" href=""><img src="./img/gallery/gal2.jfif" class="img-fluid" alt="" /></a></div>
                                <div class="swiper-slide"><a class="gallery-lightbox" href=""><img src="./img/gallery/gal3.jfif" class="img-fluid" alt="" /></a></div>
                                <div class="swiper-slide"><a class="gallery-lightbox" href=""><img src="" class="img-fluid" alt="" /></a></div>
                                <div class="swiper-slide"><a class="gallery-lightbox" href=""><img src="" class="img-fluid" alt="" /></a></div>
                                <div class="swiper-slide"><a class="gallery-lightbox" href=""><img src="" class="img-fluid" alt="" /></a></div>
                                <div class="swiper-slide"><a class="gallery-lightbox" href=""><img src="" class="img-fluid" alt="" /></a></div>
                                <div class="swiper-slide"><a class="gallery-lightbox" href=""><img src="" class="img-fluid" alt="" /></a></div>
                            </div>
                            <div class="swiper-pagination"></div>
                        </div>

                    </div>
                </section>


                <section id="contact" class="contact">
                    <div class="container">

                        <div class="section-title">
                            <h2>Contact</h2>
                            <p>The healthcare industry is in the mindst of a technological transfomation with the goal of improving patients care and we as Easy Health Care is ready to surport this progression.</p>
                        </div>

                    </div>

                    <div>
                        {/* <iframe style="border:0; width: 100%; height: 350px;" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe> */}
                    </div>

                    <div class="container">

                        <div class="row mt-5">

                            <div class="col-lg-6">

                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="info-box">
                                            <i class="bx bx-map"></i>
                                            <h3>Our Address</h3>
                                            <p>3 De Fonseka Pl, Colombo 00400</p>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="info-box mt-4">
                                            <i class="bx bx-envelope"></i>
                                            <h3>Email Us</h3>
                                            <p>easyhealthcare@gmail.com<br />easybrothers@gmail.com</p>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="info-box mt-4">
                                            <i class="bx bx-phone-call"></i>
                                            <h3>Call Us</h3>
                                            <p>+94 77 292 7874<br />+94 77 309 9297</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div class="col-lg-6">
                                <form method="post" role="form" class="php-email-form">
                                    <div class="row">
                                        <div class="col-md-6 form-group">
                                            <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required="" />
                                        </div>
                                        <div class="col-md-6 form-group mt-3 mt-md-0">
                                            <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required="" />
                                        </div>
                                    </div>
                                    <div class="form-group mt-3">
                                        <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required="" />
                                    </div>
                                    <div class="form-group mt-3">
                                        <textarea class="form-control" name="message" rows="7" placeholder="Message" required=""></textarea>
                                    </div>
                                    <div class="my-3">
                                        <div class="loading">Loading</div>
                                        <div class="error-message"></div>
                                        <div class="sent-message">Your message has been sent. Thank you!</div>
                                    </div>
                                    <div class="text-center"><button type="submit">Send Message</button></div>
                                </form>
                            </div>

                        </div>

                    </div>
                </section>

            </main>

            <footer class="fcve">
                <h3 class="fcve1">EASY Health Care Pvt Ltd</h3>
                <p class="fcve2">3 De Fonseka Pl, Colombo 00400</p>
                <br/>
                    <div class="fcve3">
                        &copy; Copyright 2023 <strong><span>Easy Health Care PVT LTD. </span></strong> All Rights Reserved
                    </div>
                    <div class="fcve4">
                        Designed by <a href="https://chamika-srimantha.me/">EASYbrothers</a>
                    </div>
            </footer>

        </div>
    );
}

export default HomePage;