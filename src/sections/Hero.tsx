import { profile } from "../data/profile";
import Button from "../components/button";
import SocialLinks from "../components/sociallinks";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="container hero">
      <div className="hero__text">
        <h3>{profile.greeting}</h3>
        <h1>{profile.name}</h1>
        <h3>
          {profile.rolePrefix} <span className="accent">{profile.role}</span>
        </h3>
        <p className="hero__bio">{profile.bio}</p>
        <SocialLinks items={profile.socials} />
        <Button href={profile.cv} download>Download CV</Button>
      </div>

      <div className="hero__photo">
        <div className="hero__frame">
          <img src={profile.photo} alt={profile.name} />
        </div>
      </div>
    </div>
  );
}