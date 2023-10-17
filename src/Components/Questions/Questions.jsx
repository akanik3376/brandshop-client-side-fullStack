
const Questions = () => {
    return (
        <div className="pt-5">
            <h1 className="text-4xl text-white text-center font-semibold">Frequently Asked <span className="text-orange-800">Questions</span></h1>

            <div className="text-white">
                <div className="collapse collapse-arrow ">
                    <input type="radio" name="my-accordion-2" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                        Can I adapt Vehica to my country?
                    </div>
                    <div className="collapse-content border-b">
                        <p>Yes, you can translate all website copy to your language of choice. Additionally, you can also set your own units of measurement, number formats and currency symbols</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Can I adapt it to other businesses than automotive?
                    </div>
                    <div className="collapse-content  border-b">
                        <p>Vehica is an incredibly flexible platform that you can easily adapt to other industries and businesses. We have many clients currently using it for selling real estate, boats, planes, construction work, campers, collections and cables.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        How many listings can the system handle?
                    </div>
                    <div className="collapse-content  border-b">
                        <p>There are no limits to the system. We have clients that frequently work with more than 10.000 listings on our standard servers and speed is never compromised.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        What’s all included in the purchase?
                    </div>
                    <div className="collapse-content  border-b">
                        <p>With a purchase of Vehica you will receive the Vehica WordPress Theme with Free Lifetime Updates. Beyond that, you will also receive 6 months of professional support. After the initial 6 months you can choose to purchase a support extension if wanted. However, this is entirely optional. There are no recurring fees. </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        What if I would like to get a refund?
                    </div>
                    <div className="collapse-content  border-b">
                        <p>We accept refund requests sent through the Themeforest Form (link). We do not ask any questions – we just accept it. You just need to fill in the form provided in the link that takes less than 1 minute.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Why Should I Trust Vehica?
                    </div>
                    <div className="collapse-content  border-b">
                        <li>We’re proud of our 4.97/5.00 rating on Themeforest – it’s one of the highest scores</li>
                        <li>We offer a free demo (link) for everyone that’s interested and we are fully transparent about what the</li>
                        <li>You can additionally contact us any time via the support center (link)</li>
                        <li>We have already proudly served more than 5000 clients including 1000 Vehica Customers</li>
                        <li>We’re so confident you’re going to love Vehica just as much as we do that if you don’t, we offer a full refund. All you have to do is fill in a quick 1-minute form (link)</li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Questions;