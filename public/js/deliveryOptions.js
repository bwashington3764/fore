let selectedPreference = 'sustainability';

let deliveryOption = [`                        
    <button data-delivery-preference="sustainability" class="delivery-option delivery-option-eco ix-element">
    <h4>Eco-Friendly Delivery</h4>
    <p>We deliver all of your items at once to reduce the number of boxes and Co2 emissions</p>
    <div class="factor-sliders">
        <p class="factor-slider slider-sustainability">
            Sustainability
        </p>
        <p class="factor-slider slider-speed">
            Speed
        </p>
        <p class="factor-slider slider-affordability">
            Affordability
        </p>
    </div>
    </button>
    `,
    `
    <button data-delivery-preference="affordability" class="delivery-option delivery-option-pickup ix-element">
    <h4>In-Store Pickup</h4>
    <p>We'll bring your order to your vehicle for a seamless curbside pickup</p>
    <div class="factor-sliders">
        <p class="factor-slider slider-sustainability">
            Sustainability
        </p>
        <p class="factor-slider slider-speed">
            Speed
        </p>
        <p class="factor-slider slider-affordability">
            Affordability
        </p>
    </div>
    </button>
    `,
    `
    <button data-delivery-preference="speed" class="delivery-option delivery-option-express ix-element">
    <h4>Express Delivery</h4>
    <p>We'll ship your items as soon as they are available directly to your doorstep</p>
    <div class="factor-sliders">
        <p class="factor-slider slider-sustainability">
            Sustainability
        </p>
        <p class="factor-slider slider-speed">
            Speed
        </p>
        <p class="factor-slider slider-affordability">
            Affordability
        </p>
    </div>
</button>
`]

deliveryOption.forEach(element => {
    document.querySelector('#delivery .delivery-options').insertAdjacentHTML('beforeend', element);
});
document.querySelectorAll('#delivery .delivery-options button').forEach(button => {
    button.addEventListener('click', event => {
        document.querySelectorAll("#delivery .delivery-options button").forEach(button => button.classList.remove("active"));
        event.currentTarget.classList.add("active");
    });
});

document.querySelectorAll("#delivery nav button").forEach(button => {
    button.addEventListener('click', event => {
        let deliveryel = document.querySelector('#delivery .delivery-options');
        
        deliveryel.innerHTML = '';
        deliveryel.classList.remove('sustainability-active', 'speed-active', 'affordability-active');
        document.querySelectorAll("#delivery nav.chicklets button").forEach(button => button.classList.remove("active"));
        button.classList.add("active");
        
        let preference = event.currentTarget.getAttribute("data-delivery-preference");

        if(preference == "sustainability"){
            deliveryel.insertAdjacentHTML('beforeend', deliveryOption[0]);
            deliveryel.insertAdjacentHTML('beforeend', deliveryOption[1]);
            deliveryel.insertAdjacentHTML('beforeend', deliveryOption[2]);
            deliveryel.classList.add('sustainability-active');
        }else if(preference == "speed"){
            deliveryel.insertAdjacentHTML('beforeend', deliveryOption[2]);
            deliveryel.insertAdjacentHTML('beforeend', deliveryOption[1]);
            deliveryel.insertAdjacentHTML('beforeend', deliveryOption[0]);
            deliveryel.classList.add('speed-active');
        }else if(preference == "affordability"){
            deliveryel.insertAdjacentHTML('beforeend', deliveryOption[1]);
            deliveryel.insertAdjacentHTML('beforeend', deliveryOption[0]);
            deliveryel.insertAdjacentHTML('beforeend', deliveryOption[2]);
            deliveryel.classList.add('affordability-active');
        }

        document.querySelectorAll('#delivery .delivery-options button').forEach(button => {
            button.addEventListener('click', event => {
                // console.log("hi");
                document.querySelectorAll("#delivery .delivery-options button").forEach(button => button.classList.remove("active"));
                event.currentTarget.classList.add("active");
            });
        });
    });
});

document.querySelector("#delivery .action-panel .active").addEventListener('click', event =>{
    console.log(selectedPreference);
})