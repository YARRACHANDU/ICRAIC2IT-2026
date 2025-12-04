import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>Pharmacy College</li>
            <li>All Grievances</li>
            <li>Placement Statistics</li>
            <li>Accreditations & Affiliations</li>
            <li>NRI Alumni Registration</li>
            <li>Entrepreneurship Development Cell</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>Pharmacy College</li>
            <li>All Grievances</li>
            <li>Placement Statistics</li>
            <li>Accreditations & Affiliations</li>
            <li>NRI Alumni Registration</li>
            <li>Entrepreneurship Development Cell</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Info</h3>
          <ul className="space-y-2 text-sm">
            <li>IQAC</li>
            <li>Service Rules</li>
            <li>Leave Rules</li>
            <li>Mandatory Disclosure</li>
            <li>Administrative Committees</li>
          </ul>
        </div>

        {/* Quick Info */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Downloads</h3>
          <ul className="space-y-2 text-sm">
            <li>Newsletters</li>
            <li>Magazines</li>
            <li>Prospectus</li>
            <li>Audit Reports</li>
            <li>Budget Reports</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Feedback/Survey
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Student Exit Survey</li>
            <li>Alumni Feedback</li>
            <li>Feedback On Facilities</li>
            <li>Anti Ragging Undertaking</li>
            <li>AICTE Student Feedback</li>
            <li>AICTE Faculty Feedback</li>
            <li>Parents/Employer Feedback</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Get In Touch With Us!
          </h3>

          <p className="text-sm leading-relaxed">
            NRI INSTITUTE OF TECHNOLOGY, Pothavarappadu (V), Via Nunna,
            Agiripalli (M), Vijayawada Rural, Krishna District, Andhra Pradesh.
          </p>

          <p className="mt-3 text-sm">
            <strong>Tel :</strong> (+91) 0866 - 2469 666
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp; (+91) 9391 878 787
          </p>

          <p className="mt-3 text-sm">
            <strong>Email :</strong> principal@nriit.edu.in
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} NRI Institute of Technology. All Rights
        Reserved.
      </div>
    </footer>
  );
}
