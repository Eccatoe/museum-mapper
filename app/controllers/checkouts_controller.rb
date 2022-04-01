require "stripe"
require_relative "../.stripe_key.rb"

class CheckoutsController < ApplicationController
    skip_before_action :authorize, only: :create

   
    def create 
      Stripe.api_key = $stripe_key

      session = Stripe::Checkout::Session.create({
        line_items: [{
          # Provide the exact Price ID (e.g. pr_1234) of the product you want to sell
          # standard
          price: 'price_1KjbY2LzsVUqCQVoKPRkeqCC',
          quantity: params[:quantity],
        },
      {
         # extended
         price: 'price_1KjbaYLzsVUqCQVoEg9oBiPq',
         quantity: params[:quantity],
      },
    { 
      price: 'price_1KjbbQLzsVUqCQVoOF0OoTYw',
      quantity: params[:quantity]
     }],
        mode: 'payment',
        success_url: request.domain + '?success=true',
        cancel_url: request.domain + '?canceled=true',
      })
      redirect session.url, 303
    end

     





        # session = Stripe::Checkout::Session.create(
        #     payment_method_types: ['card'],
        #     line_items: [{
        #       name: 'T-shirt',
        #       description: 'Comfortable cotton t-shirt',
        #       currency: 'usd',
        #       price_data: {
        #         currency: 'usd',
        #         unit_amount: 2000,
        #         product_data: {
        #           name: 'T-shirt',
        #           description: 'Comfortable cotton t-shirt',
        #           images: ['https://example.com/t-shirt.png'],
        #         },
        #       },
        #       quantity: 1,
        #     }],
        #     mode: 'payment',
        #     success_url: 'https://example.com/success?session_id={CHECKOUT_SESSION_ID}',
        #     cancel_url: 'https://example.com/cancel',
        #   ) 
        #   redirect session.url, 303

        # stripePrice = Stripe::Price.create({
        #     unit_amount: 200,
        #     currency: 'usd',
        #     product: 'prod_LPBbRYHkFhOGX4',
        #   })

        #     #create session -------------------
        #   session = Stripe::Checkout::Session.create({
        #     line_items: [{
        #       # Provide the exact Price ID (e.g. pr_1234) of the product you want to sell
        #       price: '{{PRICE_ID}}',
        #       quantity: 1,
        #     }],
        #     mode: 'payment',
        #     success_url: YOUR_DOMAIN + '?success=true',
        #     cancel_url: YOUR_DOMAIN + '?canceled=true',
        #   })


#     end

# end
