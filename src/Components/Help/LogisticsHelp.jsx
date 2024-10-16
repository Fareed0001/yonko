import React, { useState } from "react";
import Help from "./Help";
import Navbar from "../Navbar/Navbar";
import Footer from "../MainHome/Home/Footer";
import { LuSend } from "react-icons/lu";

const LogisticsHelp = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [message, setMessage] = useState("");

  const questions = [
    "How do I place an order for delivery?",
    "What are the delivery charges?",
    "Can I schedule a delivery for a specific time?",
    "What safety measures are in place for food and grocery deliveries?",
    "Do you offer contactless delivery?",
    "What types of health supplies do you offer for delivery?",
    "Can I order alcohol and beverages for delivery?",
    "Do you deliver pet supplies?",
    "Are plant supplies available for delivery?",
    "How can I contact customer support for assistance?",
    "What payment methods do you accept?",
    "Can I cancel my order? Are there any charges?",
    "What should I do if my order arrives in bad condition?",
    "Can I modify my order after placing it?",
    "What should I do if I receive an order that's not mine?",
  ];

  const answers = [
    "Placing an order with us is simple! You can either visit our website or download our mobile app. Once there, you can browse through our wide range of products, select the items you need, and proceed to checkout. During checkout, you'll be prompted to enter your delivery address and preferred delivery time. After confirming your order, our team will ensure your items are carefully packed and delivered to your doorstep at the specified time.",
    "We strive to keep our delivery charges as low as possible to provide you with the best value. The delivery fee may vary depending on your location, the size of your order, and any special delivery instructions. However, we often offer free delivery on orders above a certain amount, so be sure to check for any ongoing promotions or discounts.",
    "Yes, absolutely! We understand that timing is crucial, especially for perishable items or special occasions. During the checkout process, you'll have the option to select a specific delivery time that is convenient for you. Our team will do their best to ensure your order arrives promptly at the designated time slot.",
    "Ensuring the safety and quality of our products is our top priority. We adhere to strict hygiene and sanitation protocols throughout the entire delivery process. Our delivery personnel undergo regular training on food safety practices and are equipped with personal protective equipment. Additionally, all food items are carefully packaged to prevent contamination during transit.",
    "Yes, we offer contactless delivery to ensure the safety and well-being of both our customers and delivery personnel. Simply specify your preference for contactless delivery during checkout, and our delivery team will leave your order at your doorstep or another designated location. You can then retrieve your items at your convenience without any physical interaction.",
    "We offer a wide range of health supplies to meet your needs, including over-the-counter medications, vitamins, supplements, personal care products, first aid supplies, and more. Whether you're looking for everyday essentials or specialty items, we've got you covered. Our products are sourced from reputable manufacturers and undergo stringent quality checks to ensure safety and efficacy.",
    "Yes, we offer a selection of alcoholic beverages, including beer, wine, spirits, and mixers, available for delivery to customers of legal drinking age. Our diverse beverage options cater to various tastes and preferences, whether you're planning a cozy night in or a festive celebration. Please drink responsibly and ensure compliance with local laws and regulations regarding alcohol consumption.",
    "Absolutely! We understand the importance of keeping your furry friends happy and healthy. That's why we offer a comprehensive range of pet supplies, including food, treats, toys, grooming products, accessories, and more. Whether you have a dog, cat, bird, fish, or small mammal, you'll find everything you need to care for your beloved pet conveniently delivered to your doorstep.",
    "Yes, we offer a variety of plant supplies to help you nurture your indoor and outdoor greenery. From potting soil and fertilizers to planters and gardening tools, we've got everything you need to cultivate thriving plants and create a beautiful botanical oasis in your home or garden. Our plant supplies are sourced from trusted brands and are sure to enhance your gardening experience.",
    "We're here to help! If you have any questions, concerns, or feedback regarding your order or our services, our friendly customer support team is just a phone call, email, or live chat away. You can reach us during our business hours, and we'll do our best to provide timely and personalized assistance to ensure your satisfaction. Your happiness is our priority, and we're committed to delivering an exceptional customer experience every step of the way.",
    "We accept a variety of payment methods to make your shopping experience as convenient as possible. You can pay for your orders using credit cards, debit cards, or bank transfer. Simply select your preferred payment method during checkout and follow the instructions to complete your transaction. Rest assured that all payment information is securely processed to ensure the safety and security of your transactions.",
    "Yes, you can cancel your order before it has been dispatched from our warehouse. However, please note that a cancellation fee may apply depending on the status of your order and any applicable cancellation policies. To cancel your order, please contact our customer support team as soon as possible.",
    "We apologize for any inconvenience caused. If your order arrives in bad condition or is damaged during transit, please contact our customer support team immediately. We will investigate the issue and work towards resolving it promptly. Depending on the circumstances, we may offer a replacement, refund, or other suitable resolution to ensure your satisfaction.",
    "While we strive to process orders quickly and efficiently, we understand that you may need to make changes after placing your order. If you wish to modify your order, please contact our customer support team as soon as possible. We will do our best to accommodate your request, although please note that changes may not be possible if your order has already been dispatched.",
    "If you receive an order that's not yours, please contact our customer support team immediately. We will investigate the issue and take appropriate action to resolve it. Depending on the circumstances, we may arrange for the incorrect order to be collected and a replacement to be delivered to you as soon as possible.",
  ];

  const handleQuestionClick = (index) => {
    setSelectedQuestion(index === selectedQuestion ? null : index);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    // ...code to send the message...
  };

  return (
    <div className="customerh">
      <Navbar />
      <Help />

      <div className="maincon">
        <div className="top">
          <h2>What's your issue Rider?</h2>
        </div>

        <div className="helpcon">
          {questions.map((question, index) => (
            <div key={index} className="allques">
              <h3 onClick={() => handleQuestionClick(index)}>
                {question} {selectedQuestion === index ? " -" : " +"}
              </h3>
              {selectedQuestion === index && (
                <p className="ans">{answers[index]}</p>
              )}
            </div>
          ))}
        </div>

        <div className="personal">
          <h2>Send A personal Message to us:</h2>
          <div className="personaltext">
            <textarea
              value={message}
              onChange={handleMessageChange}
              placeholder="Type your message here..."
              rows="10"
            />
          </div>
          <div className="btn">
            <button onClick={handleSendMessage}>
              Send Message <LuSend />
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LogisticsHelp;
