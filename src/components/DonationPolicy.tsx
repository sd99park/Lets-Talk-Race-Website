import React from "react";
import logo from "../img/BannerLogo.png";
import donorBillOfRights from "../img/Donor_Bill_Of_Rights.pdf";

const DonationPolicy: React.FC = () => {
  return (
    <div className="flex justify-center p-6 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl w-full">
        <div className="flex justify-center mb-4">
          <img src={logo} alt="donationPageLogo" className="h-24 w-auto" />
        </div>

        <p className="text-2xl font-bold text-secondary text-center mt-6 pb-4">
          www.ltrministries.com
        </p>

        <p className="text-lg text-gray-700 font-semibold text-center">
          Engaging white Christians in the ministry of reconciliation and
          justice through education, inner work, and community
        </p>

        <h1 className="text-2xl font-bold text-gray-800 mt-6 text-center">
          Donation and Gift Acceptance Policy
        </h1>

        <div className="mt-4 space-y-4 text-gray-600 leading-relaxed">
          <p>
            LTR Ministries, Inc. is honored to receive gifts that support our
            mission and programs. In order to best steward these gifts and the
            mission God has given us, LTR Ministries, Inc. has established
            donation and gift acceptance policies.
          </p>

          <p>
            LTR Ministries, Inc. respects the rights of donors to privacy,
            transparency, and consistency and follows the{" "}
            <a
              href={donorBillOfRights}
              download="Donor_Bill_of_Rights.pdf"
              className="text-primary font-semibold underline hover:text-primary-dark"
            >
              Donor Bill of Rights
            </a>{" "}
            in our donation practices.
          </p>

          <p>
            All gifts given to LTR Ministries, Inc. are considered general
            operational funding to be used to meet the organization's highest
            needs and to serve the organization's overall mission and programs
            unless the gift is restricted for a particular use by the donor.
            Restricted gifts may be made to an existing fund, whose purposes are
            already clearly defined. Other restricted gifts may be made at the
            discretion of the president or executive director for purposes that
            are approved by the board of directors and that fall within LTR
            Ministries' mission.
          </p>

          <p>
            Acceptance of any contribution, gift, or grant is at the discretion
            of LTR Ministries, Inc. LTR Ministries does not accept any gift
            unless it can be used or expended consistently with the purpose and
            mission of our ministry. Once a gift is made to LTR Ministries,
            Inc., that funding becomes the property of the ministry and cannot
            be revoked.
          </p>

          <p>
            LTR Ministries, Inc. refrains from providing financial or tax advice
            and encourages donors to seek guidance from their own professional
            advisors in the process of making their gift. LTR Ministries, Inc.
            accepts donations of cash or publicly traded securities. In-kind
            gifts are accepted at the discretion of LTR Ministries, Inc.'s
            president or executive director based on program needs, mission fit,
            usefulness, or liquidity of the in-kind gift to the current needs of
            the organization.
          </p>

          <p>
            Upon receipt of securities, the nonprofit reserves the right to
            liquidate the assets immediately, unless otherwise directed by the
            donor or unless the board deems it in the organization's best
            interest to retain the securities for investment purposes
          </p>

          <p>
            Any gifts, property, non-liquid securities, and contributions whose
            sources are not transparent or whose use is restricted in some
            manner must be reviewed by the officers of the board of directors
            prior to acceptance due to the special obligations raised or
            liabilities they may pose for LTR Ministries, Inc..
          </p>

          <p>
            LTR Ministries, Inc. provides donors with acknowledgements meeting
            IRS substantiation requirements for all gifts received. However,
            except for gifts of cash and publicly traded securities, no value
            shall be ascribed to any receipt or other form of substantiation of
            a gift received by LTR Ministries, Inc.. Donors are encouraged to
            get a qualified appraisal prior to making any gift that is not cash
            or publicly traded securities.
          </p>

          <p>
            LTR Ministries, Inc. respects the intent of the donor as it relates
            to anonymous gifts or gifts for restricted purposes. With respect to
            anonymous gifts, LTR Ministries, Inc. will restrict access to donor
            information to staff members with a business need to know and, when
            required, to the IRS.
          </p>

          <p>
            LTR Ministries, Inc.'s donation and gift acceptance policies are
            reviewed by the board of directors. Any gifts not outlined in this
            policy will be reviewed by the board before LTR Ministries, Inc.
            decides whether to accept them.
          </p>

          <p className="text-gray-500 text-sm mt-6">
            Approved by Board of Directors on March 17, 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonationPolicy;
