import { Helmet } from "react-helmet";
import logo from '../images/simple-stationery-mockup.png'

const SEO = ({ 
  title = "Aaven - Web Development & Digital Solutions",
  description = "Aaven, web development agency, website design, web developer, frontend developer, React developer, UI UX design, digital agency, South Africa",
  canonical = "https://www.aavenagency.co.za/",
  image = "/aaven logo.png"
}) => {
  return (
    <Helmet>
      {/* Page-specific title and description */}
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
    </Helmet>
  );
};

export default SEO;