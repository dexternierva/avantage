import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Grid, FullWidthSection, Row } from "../../components";
import styled from "styled-components";

const Container = styled(Grid)`
    padding: 3rem 0;

    @media screen and (min-width: 991px) {
        padding: 6rem 0;
    }
`;
function Policy () {
    return (
        <Container>
            <FullWidthSection>
                <Row ss={2} es={6} sm={2} em={6} sd={2} ed={12}>
                    <Tabs>
                        <TabList>
                            <Tab>Acceptable Use Policy</Tab>
                            <Tab>Cookie Policy</Tab>
                            <Tab>Disclaimer</Tab>
                            <Tab>Privacy Policy</Tab>
                        </TabList>
                        <TabPanel>
                            <h3>Acceptable Use Policy</h3>
                            <p>These acceptable use policy (“Acceptable Use Policy”, “AUP”, “Policy”) is an agreement between A-Vantage International Recruitment Corp. (“A-Vantage International Recruitment Corp.”, “us”, “we” or “our”) and you (“User”, “you” or “your”). This Policy sets forth the general guidelines and acceptable and prohibited uses of the a-vantageinternational.com website and any of its products or services (collectively, “Website” or “Services”).</p>

                            <h4>Prohibited activities and uses</h4>
                            <p>You may not use the Services to publish content or engage in activity that is illegal under applicable law, that is harmful to others, or that would subject us to liability, including, without limitation, in connection with any of the following, each of which is prohibited under this Policy:</p>

                            <ul>
                                <li>Distributing malware or other malicious code.</li>
                                <li>Disclosing sensitive personal information about others.</li>
                                <li>Collecting, or attempting to collect, personal information about third parties without their knowledge or consent.</li>
                                <li>Hosting, distributing or linking to child pornography or content that is harmful to minors.</li>
                                <li>Promoting or facilitating gambling, violence, terrorist activities or selling weapons or ammunition.</li>
                                <li>Engaging in the unlawful distribution of controlled substances, drug contraband or prescription medications.</li>
                                <li>Managing payment aggregators or facilitators such as processing payments on behalf of other businesses or charities.</li>
                                <li>Facilitating pyramid schemes or other models intended to seek payments from public actors.</li>
                                <li>Threatening harm to persons or property or otherwise harassing behavior.</li>
                                <li>Infringing the intellectual property or other proprietary rights of others.</li>
                                <li>Facilitating, aiding, or encouraging any of the above activities through our Services.</li>
                            </ul>

                            <h4>System abuse</h4>

                            <p>Any User in violation of our Services security is subject to criminal and civil liability, as well as immediate account termination. Examples include, but are not limited to the following:</p>

                            <ul>
                                <li>Use or distribution of tools designed for compromising security of the Services.</li>
                                <li>Intentionally or negligently transmitting files containing a computer virus or corrupted data.</li>
                                <li>Accessing another network without permission, including to probe or scan for vulnerabilities or breach security or authentication measures.</li>
                                <li>Unauthorized scanning or monitoring of data on any network or system without proper authorization of the owner of the system or network.</li>
                            </ul>

                            <h4>Service resources</h4>

                            <p>You may not consume excessive amounts of the Services or use the Services in any way which results in performance issues or which interrupts the services for other Users. Prohibited activities that contribute to excessive use, include without limitation:</p>

                            <ul>
                                <li>Deliberate attempts to overload the Services and broadcast attacks (i.e. denial of service attacks).</li>
                                <li>Engaging in any other activities that degrade the usability and performance of our Services.</li>
                            </ul>

                            <h4>No spam policy</h4>
                            
                            <p>You may not use our Services to send spam or bulk unsolicited messages. We maintain a zero tolerance policy for use of our Services in any manner associated with the transmission, distribution or delivery of any bulk e-mail, including unsolicited bulk or unsolicited commercial e-mail, or the sending, assisting, or commissioning the transmission of commercial e-mail that does not comply with the U.S. CAN-SPAM Act of 2003 ("SPAM").</p>

                            <p>Your products or services advertised via SPAM (i.e. Spamvertised) may not be used in conjunction with our Services. This provision includes, but is not limited to, SPAM sent via fax, phone, postal mail, email, instant messaging, or newsgroups.</p>

                            <p>Sending emails through our Services to purchased email lists (“safe lists”) will be treated as SPAM.</p>

                            <h4>Defamation and objectionable content</h4>

                            <p>We value the freedom of expression and encourage Users to be respectful with the content they post. We are not a publisher of User content and are not in a position to investigate the veracity of individual defamation claims or to determine whether certain material, which we may find objectionable, should be censored.</p>

                            <h4>Copyrighted content</h4>

                            <p>Copyrighted material must not be published via our Services without the explicit permission of the copyright owner or a person explicitly authorized to give such permission by the copyright owner. Upon receipt of a claim for copyright infringement, or a notice of such violation, we will immediately run full investigation. However, we generally require a court order from a court of competent jurisdiction, as determined by us in our sole discretion, to take down alleged infringing material from the Services. We may terminate the Service of Users with repeated copyright infringements. Further procedures may be carried out if necessary. We will assume no liability to any User of the Services for the removal of any such material.</p>

                            <p>If you believe your copyright is being infringed by a person or persons using our Services, please send a report of the copyright infringement to the contact details listed at the end of this Policy.</p>

                            <h4>Security</h4>

                            <p>You take full responsibility for maintaining reasonable security precautions for your account. You are responsible for protecting and updating any login account provided to you for our Services. You must protect the confidentiality of your login details, and you should change your password periodically.</p>

                            <h4>Enforcement</h4>

                            <p>We reserve our right to be the sole arbiter in determining the seriousness of each infringement and to immediately take corrective actions, including but not limited to:</p>

                            <ul>
                                <li>Suspending or terminating your Service with or without notice upon any violation of this Policy. Any violations may also result in the immediate suspension or termination of your account.</li>
                                <li>Disabling or removing any content which is prohibited by this Policy, including to prevent harm to others or to us or our Services, as determined by us in our sole discretion.</li>
                                <li>Reporting violations to law enforcement as determined by us in our sole discretion.</li>
                                <li>A failure to respond to an email from our abuse team within 2 days, or as otherwise specified in the communication to you, may result in the suspension or termination of your Services.</li>
                            </ul>

                            <p>Suspended and terminated User accounts due to violations will not be re-activated. A backup of User’s data may be requested, however it may be subject to certain penalty fees imposed according to the breach of this Policy terms. The final penalty fee will be determined by the type and frequency of the violations.</p>

                            <p>Nothing contained in this Policy shall be construed to limit our actions or remedies in any way with respect to any of the prohibited activities. We reserve the right to take any and all additional actions we may deem appropriate with respect to such activities, including without limitation taking action to recover the costs and expenses of identifying offenders and removing them from our Services, and levying cancellation charges to cover our costs. In addition, we reserve at all times all rights and remedies available to us with respect to such activities at law or in equity.</p>

                            <h4>Reporting violations</h4>

                            <p>If you have discovered and would like to report a violation of this Policy, please contact us immediately. We will investigate the situation and provide you with full assistance.</p>

                            <h4>Changes and amendments</h4>

                            <p>We reserve the right to modify this Policy or its terms relating to the Website or Services at any time, effective upon posting of an updated version of this Policy on the Website. When we do, we will revise the updated date at the bottom of this page. Continued use of the Website after any such changes shall constitute your consent to such changes.</p>

                            <h4>Acceptance of this policy</h4>

                            <p>You acknowledge that you have read this Policy and agree to all its terms and conditions. By using the Website or its Services you agree to be bound by this Policy. If you do not agree to abide by the terms of this Policy, you are not authorized to use or access the Website and its Services.</p>

                            <h4>Contacting us</h4>

                            <p>If you would like to contact us to understand more about this Policy or wish to contact us concerning any matter relating to it, you may send an email to info@a-vantageinternational.com</p>

                            <p><i>This document was last updated on October 1, 2019</i></p>
                        </TabPanel>
                        <TabPanel>
                            <h3>Cookie Policy</h3>

                            <p>This cookie policy (“Policy”) describes what cookies are and how A-Vantage International Recruitment Corp. (“A-Vantage International Recruitment Corp.”, “we”, “us” or “our”) uses them on the a-vantageinternational.com website and any of its products or services (collectively, “Website” or “Services”).</p>

                            <p>You should read this Policy so you can understand what type of cookies we use, the information we collect using cookies and how that information is used. It also describes the choices available to you regarding accepting or declining the use of cookies. For further information on how we use, store and keep your personal data secure, see our Privacy Policy.</p>

                            <h4>What are cookies?</h4>

                            <p>Cookies are small pieces of data stored in text files that are saved on your computer or other devices when websites are loaded in a browser. They are widely used to remember you and your preferences, either for a single visit (through a “session cookie”) or for multiple repeat visits (using a “persistent cookie”).</p>

                            <p>Session cookies are temporary cookies that are used during the course of your visit to the Website, and they expire when you close the web browser.</p>

                            <p>Persistent cookies are used to remember your preferences within our Website and remain on your desktop or mobile device even after you close your browser or restart your computer. They ensure a consistent and efficient experience for you while visiting our Website or using our Services.</p>

                            <p>Cookies may be set by the Website (“first-party cookies”), or by third parties, such as those who serve content or provide advertising or analytics services on the website (“third party cookies”). These third parties can recognize you when you visit our website and also when you visit certain other websites.</p>

                            <h4>What type of cookies do we use?</h4>
                            <dl>
                                <dt>Necessary cookies</dt>
                                <dd>Necessary cookies allow us to offer you the best possible experience when accessing and navigating through our Website and using its features. For example, these cookies let us recognize that you have created an account and have logged into that account to access the content.</dd>
                                <dt>Functionality cookies</dt>
                                <dd>Functionality cookies let us operate the Website and our Services in accordance with the choices you make. For example, we will recognize your username and remember how you customized the Website and Services during future visits.</dd>
                                <dt>Analytical cookies</dt>
                                <dd>These cookies enable us and third-party services to collect aggregated data for statistical purposes on how our visitors use the Website. These cookies do not contain personal information such as names and email addresses and are used to help us improve your user experience of the Website.</dd>
                                <dt>Social media cookies</dt>
                                <dd>Third-party cookies from social media sites (such as Facebook, Twitter, etc) let us track social network users when they visit our Website, use our Services or share content, by using a tagging mechanism provided by those social networks.</dd>
                                <dd>These cookies are also used for event tracking and remarketing purposes. Any data collected with these tags will be used in accordance with our and social networks’ privacy policies. We will not collect or share any personally identifiable information from the user.</dd>
                            </dl>

                            <h4>What are your cookie options?</h4>

                            <p>If you don’t like the idea of cookies or certain types of cookies, you can change your browser’s settings to delete cookies that have already been set and to not accept new cookies. To learn more about how to do this or to learn more about cookies, visit internetcookies.org</p>
                            <p>Please note, however, that if you delete cookies or do not accept them, you might not be able to use all of the features our Website and Services offer.</p>

                            <h4>Changes and amendments</h4>

                            <p>We reserve the right to modify this Policy relating to the Website or Services at any time, effective upon posting of an updated version of this Policy on the Website. When we do we will revise the updated date at the bottom of this page. Continued use of the Website after any such changes shall constitute your consent to such changes.</p>

                            <h4>Acceptance of this policy</h4>

                            <p>You acknowledge that you have read this Policy and agree to all its terms and conditions. By using the Website or its Services you agree to be bound by this Policy. If you do not agree to abide by the terms of this Policy, you are not authorized to use or access the Website and its Services.</p>

                            <h4>Contacting us</h4>

                            <p>If you would like to contact us to understand more about this Policy or wish to contact us concerning any matter relating to it, you may send an email to info@a-vantageinternational.com</p>

                            <p><i>This document was last updated on October 1, 2019</i></p>
                        </TabPanel>

                        <TabPanel>
                            <h3>Disclaimer</h3>

                            <p>This disclaimer (“Disclaimer”, “Agreement”) is an agreement between A-Vantage International Recruitment Corp. (“A-Vantage International Recruitment Corp.”, “us”, “we” or “our”) and you (“User”, “you” or “your”). This Disclaimer sets forth the general guidelines, terms and conditions of your use of the a-vantageinternational.com website and any of its products or services (collectively, “Website” or “Services”).</p>

                            <h4>Representation</h4>

                            <p>Any views or opinions represented in this Website are personal and belong solely to A-Vantage International Recruitment Corp. and do not represent those of people, institutions or organizations that the owner may or may not be associated with in professional or personal capacity unless explicitly stated. Any views or opinions are not intended to malign any religion, ethnic group, club, organization, company, or individual.</p>

                            <h4>Content and postings</h4>

                            <p>You may not modify, print or copy any part of the Website. Inclusion of any part of this Website in another work, whether in printed or electronic or another form or inclusion of any part of the Website in another website by embedding, framing or otherwise without the express permission of A-Vantage International Recruitment Corp. is prohibited. Compensation.</p>

                            <p>This Website accepts forms of advertising. Advertising space will always be identified as such. Some of the links on the Website may be “affiliate links”. This means if you click on the link and purchase an item, A-Vantage International Recruitment Corp. will receive an affiliate commission.</p>

                            <h4>Indemnification and warranties</h4>

                            <p>While we have made every attempt to ensure that the information contained on the Website is correct, A-Vantage International Recruitment Corp. is not responsible for any errors or omissions, or for the results obtained from the use of this information. All information on the Website is provided “as is”, with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information, and without warranty of any kind, express or implied. In no event will A-Vantage International Recruitment Corp. be liable to you or anyone else for any decision made or action taken in reliance on the information on the Website or for any consequential, special or similar damages, even if advised of the possibility of such damages. Information on the Website is for general information purposes only and is not intended to provide legal, financial, medical, or any other type of professional advice. Please seek professional assistance should you require it. Furthermore, information contained on the Website and any pages linked to and from it are subject to change at any time and without warning.</p>

                            <p>We reserve the right to modify this Disclaimer relating to the Website or Services at any time, effective upon posting of an updated version of this Disclaimer on the Website. When we do we will revise the updated date at the bottom of this page. Continued use of the Website after any such changes shall constitute your consent to such changes.</p>

                            <h4>Acceptance of this disclaimer</h4>

                            <p>You acknowledge that you have read this Disclaimer and agree to all its terms and conditions. By accessing the Website you agree to be bound by this Disclaimer. If you do not agree to abide by the terms of this Disclaimer, you are not authorized to use or access the Website.</p>

                            <h4>Contacting us</h4>

                            <p>If you would like to contact us to understand more about this Policy or wish to contact us concerning any matter relating to it, you may send an email to info@a-vantageinternational.com</p>

                            <p><i>This document was last updated on October 1, 2019</i></p>
                        </TabPanel>

                        <TabPanel>
                            <h3>Privacy Policy</h3>

                            <p>This privacy policy (“Policy”) describes how A-Vantage International Recruitment Corp. (“A-Vantage International Recruitment Corp.”, “we”, “us” or “our”) collects, protects and uses the personally identifiable information (“Personal Information”) you (“User”, “you” or “your”) may provide on the a-vantageinternational.com website and any of its products or services (collectively, “Website” or “Services”). It also describes the choices available to you regarding our use of your Personal Information and how you can access and update this information. This Policy does not apply to the practices of companies that we do not own or control, or to individuals that we do not employ or manage.</p>

                            <h4>Automatic collection of information</h4>

                            <p>When you visit the Website our servers automatically record information that your browser sends. This data may include information such as your device’s IP address, browser type and version, operating system type and version, language preferences or the webpage you were visiting before you came to our Website, pages of our Website that you visit, the time spent on those pages, information you search for on our Website, access times and dates, and other statistics.</p>

                            <h4>Collection of personal information</h4>

                            <p>You can visit the Website without telling us who you are or revealing any information by which someone could identify you as a specific, identifiable individual. If, however, you wish to use some of the Website’s features, you will be asked to provide certain Personal Information (for example, your name and e-mail address). We receive and store any information you knowingly provide to us when you create an account, or fill any online forms on the Website.  When required, this information may include your email address, name, phone number, address, or other Personal Information. You can choose not to provide us with your Personal Information, but then you may not be able to take advantage of some of the Website’s features. Users who are uncertain about what information is mandatory are welcome to contact us.</p>

                            <h4>Use and processing of collected information</h4>

                            <p>Any of the information we collect from you may be used to personalize your experience; improve our Website; improve customer service and respond to queries and emails of our customers; send newsletters; conduct marketing research and customer analysis, send notification emails such as password reminders, updates, etc; run and operate our Website and Services. Information collected automatically is used only to identify potential cases of abuse and establish statistical information regarding Website usage. This statistical information is not otherwise aggregated in such a way that would identify any particular user of the system.</p>

                            <p>We may process Personal Information related to you if one of the following applies: (i) You have given your consent for one or more specific purposes. Note that under some legislations we may be allowed to process information until you object to such processing (by opting out), without having to rely on consent or any other of the following legal bases below. This, however, does not apply, whenever the processing of Personal Information is subject to European data protection law; (ii) Provision of information is necessary for the performance of an agreement with you and/or for any pre-contractual obligations thereof; (iii) Processing is necessary for compliance with a legal obligation to which you are subject; (iv) Processing is related to a task that is carried out in the public interest or in the exercise of official authority vested in us; (v) Processing is necessary for the purposes of the legitimate interests pursued by us or by a third party. In any case, we will be happy to clarify the specific legal basis that applies to the processing, and in particular whether the provision of Personal Information is a statutory or contractual requirement, or a requirement necessary to enter into a contract.</p>

                            <h4>Information transfer and storage</h4>

                            <p>Depending on your location, data transfers may involve transferring and storing your information in a country other than your own. You are entitled to learn about the legal basis of information transfers to a country outside the European Union or to any international organization governed by public international law or set up by two or more countries, such as the UN, and about the security measures taken by us to safeguard your information. If any such transfer takes place, you can find out more by checking the relevant sections of this document or inquire with us using the information provided in the contact section.</p>

                            <h4>The rights of users</h4>

                            <p>You may exercise certain rights regarding your information processed by us. In particular, you have the right to do the following: (i) you have the right to withdraw consent where you have previously given your consent to the processing of your information; (ii) you have the right to object to the processing of your information if the processing is carried out on a legal basis other than consent; (iii) you have the right to learn if information is being processed by us, obtain disclosure regarding certain aspects of the processing and obtain a copy of the information undergoing processing; (iv) you have the right to verify the accuracy of your information and ask for it to be updated or corrected; (v) you have the right, under certain circumstances, to restrict the processing of your information, in which case, we will not process your information for any purpose other than storing it; (vi) you have the right, under certain circumstances, to obtain the erasure of your Personal Information from us; (vii) you have the right to receive your information in a structured, commonly used and machine readable format and, if technically feasible, to have it transmitted to another controller without any hindrance. This provision is applicable provided that your information is processed by automated means and that the processing is based on your consent, on a contract which you are part of or on pre-contractual obligations thereof.</p>

                            <h4>The right to object to processing</h4>

                            <p>Where Personal Information is processed for the public interest, in the exercise of an official authority vested in us or for the purposes of the legitimate interests pursued by us, you may object to such processing by providing a ground related to your particular situation to justify the objection. You must know that, however, should your Personal Information be processed for direct marketing purposes, you can object to that processing at any time without providing any justification. To learn, whether we are processing Personal Information for direct marketing purposes, you may refer to the relevant sections of this document.</p>

                            <h4>How to exercise these rights</h4>

                            <p>Any requests to exercise User rights can be directed to the Owner through the contact details provided in this document. These requests can be exercised free of charge and will be addressed by the Owner as early as possible.</p>

                            <h4>Privacy of children</h4>

                            <p>We do not knowingly collect any Personal Information from children under the age of 13. If you are under the age of 13, please do not submit any Personal Information through our Website or Service. We encourage parents and legal guardians to monitor their children’s Internet usage and to help enforce this Policy by instructing their children never to provide Personal Information through our Website or Service without their permission. If you have reason to believe that a child under the age of 13 has provided Personal Information to us through our Website or Service, please contact us. You must also be at least 16 years of age to consent to the processing of your Personal Information in your country (in some countries we may allow your parent or guardian to do so on your behalf).</p>

                            <h4>Newsletters</h4>

                            <p>We offer electronic newsletters to which you may voluntarily subscribe at any time. You may choose to stop receiving our newsletter or marketing emails by following the unsubscribe instructions included in these emails or by contacting us. However, you will continue to receive essential transactional emails.</p>

                            <h4>Cookies</h4>

                            <p>The Website uses “cookies” to help personalize your online experience. A cookie is a text file that is placed on your hard disk by a web page server. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you, and can only be read by a web server in the domain that issued the cookie to you. We may use cookies to collect, store, and track information for statistical purposes to operate our Website and Services. You have the ability to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. If you choose to decline cookies, you may not be able to fully experience the features of the Website and Services. To learn more about cookies and how to manage them, visit internetcookies.org</p>

                            <p>In addition to using cookies and related technologies as described above, we also may permit certain third-party companies to help us tailor advertising that we think may be of interest to users and to collect and use other data about user activities on the Website. These companies may deliver ads that might also place cookies and otherwise track user behavior.</p>

                            <h4>Do Not Track signals</h4>

                            <p>Some browsers incorporate a Do Not Track feature that signals to websites you visit that you do not want to have your online activity tracked. Tracking is not the same as using or collecting information in connection with a website. For these purposes, tracking refers to collecting personally identifiable information from consumers who use or visit a website or online service as they move across different websites over time. How browsers communicate the Do Not Track signal is not yet uniform. As a result, this Website is not yet set up to interpret or respond to Do Not Track signals communicated by your browser. Even so, as described in more detail throughout this Policy, we limit our use and collection of your personal information.</p>


                            <h4>Advertisement</h4>

                            <p>We may display online advertisements and we may share aggregated and non-identifying information about our customers that we collect through the registration process or through online surveys and promotions with certain advertisers. We do not share personally identifiable information about individual customers with advertisers. In some instances, we may use this aggregated and non-identifying information to deliver tailored advertisements to the intended audience.</p>

                            <h4>Affiliates</h4>

                            <p>We may disclose information about you to our affiliates for the purpose of being able to offer you related or additional products and services. Any information relating to you that we provide to our affiliates will be treated by those affiliates in accordance with the terms of this Privacy Policy.</p>

                            <h4>Links to other websites</h4>

                            <p>Our Website contains links to other websites that are not owned or controlled by us. Please be aware that we are not responsible for the privacy practices of such other websites or third-parties. We encourage you to be aware when you leave our Website and to read the privacy statements of each and every website that may collect Personal Information.</p>

                            <h4>Information security</h4>

                            <p>We secure information you provide on computer servers in a controlled, secure environment, protected from unauthorized access, use, or disclosure. We maintain reasonable administrative, technical, and physical safeguards in an effort to protect against unauthorized access, use, modification, and disclosure of Personal Information in its control and custody. However, no data transmission over the Internet or wireless network can be guaranteed. Therefore, while we strive to protect your Personal Information, you acknowledge that (i) there are security and privacy limitations of the Internet which are beyond our control; (ii) the security, integrity, and privacy of any and all information and data exchanged between you and our Website cannot be guaranteed; and (iii) any such information and data may be viewed or tampered with in transit by a third-party, despite best efforts.</p>

                            <h4>Data breach</h4>

                            <p>In the event we become aware that the security of the Website has been compromised or users Personal Information has been disclosed to unrelated third parties as a result of external activity, including, but not limited to, security attacks or fraud, we reserve the right to take reasonably appropriate measures, including, but not limited to, investigation and reporting, as well as notification to and cooperation with law enforcement authorities. In the event of a data breach, we will make reasonable efforts to notify affected individuals if we believe that there is a reasonable risk of harm to the user as a result of the breach or if notice is otherwise required by law. When we do, we will send you an email.</p>

                            <h4>Legal disclosure</h4>

                            <p>We will disclose any information we collect, use or receive if required or permitted by law, such as to comply with a subpoena, or similar legal process, and when we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request. In the event we go through a business transition, such as a merger or acquisition by another company, or sale of all or a portion of its assets, your user account, and Personal Information will likely be among the assets transferred.</p>

                            <h4>Changes and amendments</h4>

                            <p>We may update this Privacy Policy from time to time in our discretion and will notify you of any material changes to the way in which we treat Personal Information. When changes are made, we will revise the updated date at the bottom of this page. We may also provide notice to you in other ways in our discretion, such as through contact information you have provided. Any updated version of this Privacy Policy will be effective immediately upon the posting of the revised Privacy Policy unless otherwise specified. Your continued use of the Website or Services after the effective date of the revised Privacy Policy (or such other act specified at that time) will constitute your consent to those changes. However, we will not, without your consent, use your Personal Data in a manner materially different than what was stated at the time your Personal Data was collected.</p>

                            <h4>Acceptance of this policy</h4>

                            <p>You acknowledge that you have read this Policy and agree to all its terms and conditions. By using the Website or its Services you agree to be bound by this Policy. If you do not agree to abide by the terms of this Policy, you are not authorized to use or access the Website and its Services.</p>

                            <h4>Contacting us</h4>

                            <p>If you would like to contact us to understand more about this Policy or wish to contact us concerning any matter relating to it, you may send an email to info@a-vantageinternational.com</p>

                            <p><i>This document was last updated on October 1, 2019</i></p>
                        </TabPanel>
                    </Tabs>
                </Row>
            </FullWidthSection>
        </Container>
    );
}

export default Policy;