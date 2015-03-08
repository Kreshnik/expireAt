# jQuery expireAt

### About

The plugins purpose is to help you indicate once an html element has to expire. Once an expire date has been reached, a class will be added `expireAt-expired` to the element. As well as a callback function will be executed. 

## Usage

1. Include jQuery:

	```html
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
	```

2. Include plugin's code:

	```html
	<script src="expireAt.jquery.min.js"></script>
	```

3. Add the `data-expire-at` attribute with the expiration date to the elements you want to expire:

	```html
    <tr class="element" data-expire-at='2015-03-06 14:09:09'></tr>
	```

4. Call the plugin:

	```javascript
    var expireAt = $(".element").expireAt({
		interval: 60000, // Set an custom interval you want the plugin to iterate through the elements. The default is 60 seconds
		callback: function(element){
			console.warn('Expired:', element); // You can use this callback function to handle the expired element
		}
	});
	```

#### [demo/](https://github.com/Kreshnik/expireAt/tree/master)

Contains a simple HTML file to demonstrate the plugin.

#### [src/](https://github.com/Kreshnik/expireAt/tree/master/src)

This is where the source code is stored.