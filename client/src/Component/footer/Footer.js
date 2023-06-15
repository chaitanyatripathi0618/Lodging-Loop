import "../../Component/footer/footer.css";
import im2 from "../../Assets/wave.png"
function Footer() {
  return (
    <>
    <img src={im2} id="wave"/>

    
    <div className="footers">
      <div className="underfooter">
        <div className="de">
          <h1>Why LodgingLoop ?</h1>
          <p>
            Established in 2000, LodgingLoop has since positioned itself as one
            of the leading companies, providing great offers, competitive
            hotels, exclusive discounts, and a seamless online booking
            experience to many of its customers. The experience of booking your
            hotel stay, and holiday package through our desktop site or mobile
            app can be done with complete ease and no hassles atall. We also
            deliver amazing offers, such as Instant Discounts, Fare Calendar,
            MyRewardsProgram, MyWallet, and many more while updating them from
            time to time to better suit our customers’ evolving needs and
            demands.
          </p>
        </div>
        <div className="de">
          <h1>Booking Hotels with LodgingLoop</h1>
          <p>
            At LodgingLoop, you can find the best of deals and cheap hotel rooms
            to any place you want by booking your hotel rooms on our website or app.
            Being India’s leading website for hotel, and holiday
            bookings, LodgingLoop helps you book rooms that are
            affordable and customized to your convenience. With customer
            satisfaction being our ultimate goal, we also have a 24/7 dedicated
            helpline to cater to our customer’s queries and concerns. Serving
            over 5 million happy customers, we at LodgingLoop are glad to fulfill
            the dreams of folks who need a quick and easy means to find room booking. You can get a hold of the cheapest rooms of your choice
            today while also enjoying the other available options for your
            travel needs with us.
          </p>
        </div>
        <div className="de">
            <h1>
            Domestic Flights with MakeMyTrip
            </h1>
        </div>
      </div>
    </div>
    </>
  );
}
export default Footer;
