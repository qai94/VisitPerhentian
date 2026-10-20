# Requirements
## Functional requirements

1. **FR1:** The system shall display an introductory overview of Pulau Perhentian on the homepage, with links to the activities, accommodation, gallery, and contact pages.
2. **FR2:** The system shall display descriptions and images for kayaking, snorkeling, jungle trekking, and scuba diving on the activities page.
3. **FR3:** The system shall group accommodation options by Perhentian Besar and Perhentian Kecil, displaying each property's name, image, introductory description, indicative price, and external website link. Prices are static demonstration content rather than live quotations.
4. **FR4:** The system shall display a gallery of island photographs with descriptive captions.
5. **FR5:** The system shall provide a demonstration enquiry form with fields for full name, contact number, email address, gender, referral source, and a message. Selecting "Others" as the referral source shall reveal an additional text field.
6. **FR6:** The system shall validate required enquiry fields in the browser, reject an invalid email address or phone-number format, and require a message of at least 10 characters. On valid input, it shall display a simulated confirmation without sending or storing an enquiry on a server.
7. **FR7:** The system shall provide links to the privacy policy and developer information.

## Non-functional requirements

The following are acceptance targets to verify, rather than measured results.

1. **NFR1 - Usability:** Each of the five primary pages (Home, Gallery, Activities, Accommodation, and Contact Us) shall be reachable from every primary page in no more than 1 navigation click.
2. **NFR2 - Responsiveness:** All primary navigation links and enquiry-form controls shall remain usable without horizontal page scrolling.
3. **NFR3 - Performance:** Enquiry validation feedback or simulated confirmation shall appear within seconds of pressing Submit in the latest stable desktop versions of Chrome and Firefox.

