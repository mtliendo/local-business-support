import React from "react"

const InfoCard = ({
  name,
  street,
  city,
  website,
  facebookUrl,
  phoneNumber,
}) => {
  const websiteLink = website && (
    <a href={website} target="_blank">
      Website
    </a>
  )
  return (
    <section style={{ marginBottom: "2rem" }}>
      <article
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr)",
        }}
      >
        <address style={{ display: "flex", flexDirection: "column" }}>
          <span>{name}</span>
          <span>{street}</span>
          <span>{city}</span>
        </address>
        <section style={{ display: "flex", flexDirection: "column" }}>
          <span>{websiteLink}</span>

          <span>
            {" "}
            <a href={facebookUrl} target="_blank">
              Facebook Page
            </a>
          </span>
          <span>
            {" "}
            <a href="tel:+1{phoneNumber}" rel="nofollow">
              {phoneNumber}
            </a>
          </span>
        </section>
      </article>
    </section>
  )
}

export default InfoCard
