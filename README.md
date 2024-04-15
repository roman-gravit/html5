## HTML

###  What is HTML. How to use it

Hypertext markup language. Formatted text which will be interpreted by browser. This is the skeleton of the webpage,
    
Note: First browser was Nexus created by Tim Berners Lee. He invented HTML also.


###  What is index.html                    

It is the start point of your web site. Browser will try to load this filename by defautl at first try.
Situated in the root folder of the webserver.


###  Base structure of the html page        

   ```
   <!doctype>
   <html>
      <head>   - all needed info about the document and included css js
         <title>
      <body>   - all the content of the document which will be rendered
   ```

Tags can be pair or single:   ```<div>text</div>```  or  ```<img src=".." >```
Each tag can have its own set of attributes.

*Note:* type ! and press tab: vscode will generate it.


###  What is doctype and for what it needed  

<!doctype html>:  Used to tell browser the document type. In which standart browser needs to parse and interpret the document.
Its the first line in the html document.

###  What is ```<meta>```            

*meta* - special tag inside *head*
 
 - Short description of the page for search systems and robots.
   
 - Information to coorectly work of current page on different devices
   
 - Fix data about the page and helps browser to correctly render it

 - SEO(Search Engine Optimization) information (author, keywords, description)

https://www.ashmanov.com/education/articles/seo/


###  What is written  inside *head*
```
    <meta>  :   code type, add SEO information(description, keywords, author)
                viewport - for responsive design 
    <title> :   title of the page 
    <link>  :   universal tag for linking data (icons, CSS)  via attribute *rel*, Google fonts
                *rel*  *href* attributes
    <style> :   internal CSS
    <script> :  internal JS
    <script  src=""> : external JS

    You can put conditions comments in <body>:
    <!-- [if IE]>
        <p>Hello IE</p>
    <![endif]-->

    Note1: *hreflang*  specifies the language of the document in the link: 
            <a href="https://www.w3schools.com" hreflang="en">W3Schools</a>
    
    Note2:  *rel* attribute specifies the relationship between the current document and the linked document.
            <a rel="nofollow" href="https://www.w3schools.com/">W3Schools.com</a>
            bookmark   tag    search  prev   noreferrer noopener  nofollow  next  license  help external
            author    alternate
```

###  What is semantic

Choose semantic elements over non-semantic elements for your websites. 

They make your code meaningful and improve structure, accessibility, and SEO.

A semantic element clearly describes its meaning to both the browser and the developer.

``` <header>  <nav>  <main> <strong> ```.  HTML5 added a lot of semantic tags.


###  What is validate of the document

Check document for W3C standarts:
 
 - check for doctype
   
 - check syntax

 - check inner nesting of the elements

 - check DTD
    
 - check for correctness tags and attributes


###  Text tags 

```
   <h1 align=""> -- <h6 align=""> 
   <p  align="">
   <hr>                 => draw line     [non semantic]
   <br>                 => break line    [non semantic]
   <address>            => Info about author
   <q>                  => quote of somebody text
   <blockquote>         => big quote text from somebody
   <time>

   Text decoration
   <b> <i> <tt> <s>     => This will be not read by robot  [non semantic]
   <strong> <em>        => HTML5 semantic tags
   <del>    <ins>       => HTML5 semantic tags

   <code>               => to show program code
   <pre>                => preformatted text. formatting will not change
   <small> <big>        => logicaly show the part of the text in the sentence
   <sub> <sup>          => for formulas: pow  n^2
```


###  Button                                 

Type:
   
   - button:   simple button
     
   - submit:   inside <form> - send form data
   
   - reset:    inside <form> - reset form data
    
    *autofocus* attribute  *disabled* attribute 

Which element better to use for buttons: It depends on context and what for we need for:
   
  - button type=button

  - button type=submit

  - input type=submit

  - input type=button

  - div

  - a


###  Images and 'alt' attribute and  using of *picture* element                           

  ``` <img  src="href" alt="image was not loaded"> ```
   
Note: Do not set width and height attributes due to responsive design, manipulate width height depending on device on CSS side.
Use *srcset* attribute to set needed image depending on media value. Browser will pick the best source from set.

   ```
   <picture>
     <source  media="(min-width: 1024px)"  srcset="..url..">
     <source  media="(min-width: 768px)"   srcset="..url..">
     <source  media="(min-width: 360px)"   srcset="..url..">
     <img src=""  alt="">
   
   ```
    
How to correctly add Image with semantic description and for search robots

   ```
   <figure>
     <img src=""  alt="">
     <figcaption>image description</figcaption>     
   
   ```

Note:
   *alt* attribute for *img* element: set the default text before image loading or failed.
   Also it can be pronounced for accesibility. Validator will failed if alt is missed for img 


###  Types of lists in HTML                    

  - ordered(numered) lists      ```<ol start="1" reversed> <li>....```
  
  - unordered(markered) lists   ```<ul> <li>   disk by default ```
   
Note:  Nested lists *ol* will start with 1.  Nested list *ul*  will start with circle
   
  - semantic lists  
    
   ```
   <dl> determinations lists        
      <dt>   termin
      <dd>   description
   
   ```




###  Types of Input elements

Attribute type:

 - text:  
    
 - number:      attributes *min*  *max*  *step*  !useful for mobile phones: keyboard will be displayed
    
 - password:    
   
 - range
    
 - color 
    
 - submit 
   
 - reset  
   
 - text   list="list"  + <datalist>
   
 - email:     inside <form> it can be validated:  !useful for mobile phones: keyboard will be displayed
   
 - url:       inside <form> it can be validated
   
 - image 
   
 - tel:    !useful for mobile phones: keyboard will be displayed
   
 - search 
   
 - date         attributes *min*  *max*  *default*
   
 - datetime-local:  time can be added and show local time date
   
 - month:    month can be chosen
   
 - time:     only time
   
 - week:     number of the week in the year (1-52)
   
 - hidden    to post on the form some kind of technical data to server
                tracking info?

 - file      show file dialog  [accept]  [multiple]
   
 - checkbox  *checked* attrubute
   
 - radio:    set *name* to the same value   *checked* attrubute
                Use <label> for checkbox and radio


###  What is canvas
   
HTML5 element and API for drawing graphics

###  For what do we use data attributes
   
The old-style. For store some info.  ```  data-price="30" ```


###  Difference between script, script async and script defer 

 - **script**        : block HTML reading
	
 - **script async**  : executing pararell with HTML reading (some code analytics)
	
 - **script defer**  : execution AFTER all HTML reading(parsing), all DOM tree was loaded


###  What is datalist

This is HTML5 element for creating dropdown list.

   ```
   <input list="country">
   <datalist id="country">  =>  set the same id
      <option value="India">
      <option value="Italy">
   </datalist>

   ```

###  What is progressive rendering

Tehchnologies which help to **encrease the webpage loading and showing it**.

Rendering means converting code into an interactive webpage that our users can see and utilize its functionality. 

Now, being Progressive means doing things such that the highest priority thing will be done first, after that 

less priority thing will be done and in this manner, work will be completed.


 - **Client-Side Rendering (CSR)**
   In Client-Side Rendering the content is rendered on the client side. 
   Here when a user visits any webpage then request to get an HTML and CSS file is made to the server and 
   then the server sends an HTML and CSS file to the client side. 
   After processing that code, a request to get the JS file is made and till the JS file is not loaded, 
   HTML and CSS will not be shown on the browser. So the user will see a blank page until the JS file 
   will not be loaded.

 - **Server-Side Rendering (SSR)** 
   In Server-Side Rendering, the content is first rendered on the server side and then send to the client side. 
   Here when a user visits then request to get a webpage is made to the server then the server first 
   loads the HTML and CSS file on itself and then processes it and then sends the processed web page 
   to the client side. After getting that webpage, the User can see the webpage and the browser will be waiting 
   for the JS file to be loaded. Till the JS file is not loaded, the User can only see the webpage 
   but can’t interact with it. Interaction with the web page is only possible with the help of JS(Javascript).

 - **Progressive Rendering**   
   (Lazy Loading of Image / Not processing all the CSS initially)
   In progressive Rendering, the web page is divided into different parts on the basis of priority. 
   So different parts will be rendered sequentially according to Server-Side Rendering and sent to the client side.
   This means that here first whole page will not be rendered on the server instead, high priority part of the 
   page is rendered and sent to the client side, then low priority part of the page is rendered and sent 
   to the client side.


###  What is web-components and their technologies

This is a suite of different technologies allowing you to **create reusable custom elements** 

with their functionality encapsulated away from the rest of your code — and utilize them in your web apps.
   
Web Components consists of three technologies used together:
   
**Custom Elements**

This technology allows us to extend the HTML and lets us define our own tags. It can even extend the components developed on different frameworks. 

Using custom elements, we have flexibility by using a bottom-up approach with HTML elements or build upon the native HTML elements to reuse the functionality.

```<counter-element start="3"></counter-element>```

Lifecycle Methods:

 - constructor() : It’s called when the component is first initialized. It must call super() and can set any defaults or perform other pre-rendering processes.

 - static observedAttributes() : Returns an array of attributes that the browser will observe.

 - attributeChangedCallback(propertyName, oldValue, newValue) : Called whenever an observed attribute is changed. 
                           Those defined in HTML are passed immediately, but JavaScript can modify them.

 - connectedCallback() : This function is called when the Web Component is appended to a DOM. It should run any required rendering

 - disconnectedCallback() : It’s called when the Web Component is removed from a DOM.

 - adoptedCallback() : This function is called when a Web Component is moved from one document to another. 


**Shadow DOM**

This allows the web browsers to render DOM, by not adding it in the main document DOM tree. 
It protects the markup structure, behaviour, and style of the component from another code, enabling the code to work independently. 
Elements can create shadow DOM in the constructor which will eliminate the use of `connnetedCallBack`.

While the Web Component we’ve built above works, it’s not immune to outside interference, and CSS or JavaScript could modify it. 
Similarly, the styles you define for your component could leak out and affect others.

The Shadow DOM solves this encapsulation problem by attaching a separated DOM to the Web Component with:

``` const shadow = this.attachShadow({ mode: 'closed' }); ```

*open* : JavaScript in the outer page can access the Shadow DOM (using Element.shadowRoot)
*closed* : the Shadow DOM can only be accessed within the Web Component.


**HTML template**

This enables us to insert HTML elements into the browser. Now, these are widely supported by Google Chrome, 
Mozilla Firefox, Safari, Opera and Microsoft Edge. To enable backward compatibility, we can use polyfill which is a 
JavaScript library implementing HTML5 web standards.

https://kinsta.com/blog/web-components/  https://habr.com/ru/articles/443032/ [2019]
https://habr.com/ru/articles/761586/ [2023]  https://habr.com/ru/articles/546980/  [2021]


###  How to decrease the loading time of the webpage
   
  - minimize/concat of the css
   
  - minimize/obfuscate of the JS

  - image optimization, css sprites
   
  - use of CDN(content delivery network): CDN can stand for content delivery network  or content distribution network of the servers.

  - use of gzip compressions on server side
   
  - caching (on both sides)

###  Why is a good practice to pit *link* for css loading inside HEAD and *script* for scripts loading before closing *body*
    
Tha main UX task to show something to use as fast as possible. There are two reasonable options: before or after the rendered HTML. 
   
  - HEAD: I can think of only esthetic reasons...

  - END OF BODY (or defer)
      When a script is placed after rendered HTML, the DOM is sure to be parsed and ready to be manipulated when the script is executed. 
      
      However, if a script tag includes either async or defer attribute the browser continue  parsing HTML while loading the script.

      1) *async* script is executed as soon as it is loaded, potentially before the DOM is completed.
      2) *defer* script is executed after the DOM is built. At that stage document.readyState is interactive. 
          When all deferred scripts are executed DOMContentLoaded event is fired.
      
      *defer* attribute is not used with JavaScript modules because they are deferred by default ```<script type="module">```

      !! you can put defer attribute to *script* and put it to the *head*

      https://medium.com/geekculture/where-to-put-a-script-tag-into-head-or-body-end-b5b063058e0b 


###  Main phases of checking if HTML document is valid
    
  - DTD validation  (doctype)
   
  - Syntax validation of the used ```<tags...>```
    
  - Check for wrong elements


###  Consider HTML5 as an open web platform. What are the building blocks of HTML5
   
   - Semantics:       HTML tags describe the content
   
   - Styling:         Customizing appearance of HTML tags
   
   - Device access:   Allows for the usage of various input and output devices.
   
   - Connectivity:    Communicate with the server in new and innovative ways.
   
   - Offline and storage: Allows webpages to store data on the client-side locally and operate offline more efficiently.
   
   - Multimedia:      Audio/ video content
   
   - 2D/3D graphics and effects: Allows a much more diverse range of presentation options
   
   - Performance and integration: Provides greater speed optimization and better usage of computer hardware.

###  What are the features of the multilanguage sites
   
   - use lang tag HTML
   
   - redirect user to the page with needed language
   
   - language text direction
   
   - format data and currency
   
   - use text limits  (... or more button to read the remaining)
   
   - word order in the sentence


###  Diff between innerHTML and outerHTML 

   ```
                       |------innerText------| 
  <div id="testdiv"><p>Text insude element Div</p></div>
  |                 |                             |    |
  |                 |--------innerHTML------------|    |
  |                                                    |        
  |---------------------outerHTML----------------------|

  ```

###  Global site structure                      
```
   <header>
      <nav>  navigation with priority links
    ---------------------
   <main>                |     
      <section>          |
         <article>       |  <aside>
         <article>       |
         <article>       |
      <section>          |
        <article>        |
   ----------------------
   <footer>
```

###  Forms                                     

```
   Simple Form
   <form  action="serverurl" name="..."  autocomplete="on">
     <fieldset>
        <legend>  title 

        <label for="id1"> <input id="id1">

        <textarea rows=""  cols="">  if more col/row - it will be bigger in size
          - autofocus  -disabled  -readonly   -placeholder  -required  -maxlength

        <select [multiple]>
           <option>
           <option>
           <optgroup>
              <option value=""  [selected]>  - value will be send to server
              <option value=""  [disabled]>
        <input>
```

###  Audio Video                               

```
    Universal mp3  mp4
    <audio>
        <source src="" type="audio/wav">
        <source src="" type="audio/mp3">
    </audio>

    <video>
        <source src="" type="video/ogg">
        <source src="" type="video/mp4">
    </video>

    attributes:
        - preload   auto | metadata | none
        - autoplay
        - muted:     sound will be off after page load
        - controls
        - loop
        - width   (video)
        - height  (video) 
        - poster  (video)   show prevew before video
```


###  Improving Video Presentation

The poster attribute can be used with the *video* element to display an image until the user plays the video.

	```
	<video controls poster="image.png" width="500">
		<source src="video.mp4" type="video/mp4 />
	</video>
	
	```


###  Control Image Loading

The *loading* attribute with the *img* element can be used to control how the browser loads the image. 
It has three values: “eager”, “lazy”, and “auto”:   ```<img src="picture.jpg" loading="lazy">```


###  Meta tag name=viewport

Used for responsive version of the site.
    
``` <meta name="viewport" content="width=device-width, initial-scale=1" /> ```

width and height:
      Controls the size of the viewport. It can be set to a specific number of pixels like width=600 
      or to the special value device-width, which is 100vw (100vh), or 100% of the viewport width. Minimum: 1. 
      Maximum: 10000. Negative values: ignored.

initial-scale:
      Controls the zoom level when the page is first loaded. 
      Minimum: 0.1. Maximum: 10. Default: 1. Negative values: ignored.

minimum(maximum)-scale:
      Controls how much zoom out is allowed on the page. 
      Minimum: 0.1. Maximum: 10. Default: 0.1. Negative values: ignored.

user-scalable:
      Controls whether zoom in and zoom out actions are allowed on the page. 
      Valid values: 0, 1, yes, or no. Default: 1, which is the same as yes. 
      Setting the value to 0, which is the same as no, is against Web Content Accessibility Guidelines (WCAG).

https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag


###  What are the content categories in HTML5 

Each element can be placed in several catefories with common properties.
Also can be a situation that element does not have any category.

Main **content categories**:

  - METADATA:  ```<base>, <link>, <meta>, <noscript>, <script>, <style> и <title>```
     
  - FLOW CONTENT: div, span, a .....

  - SECTIONING CONTENT: header footer aside nav article

  - HEADING CONTENT:  ```<h1>-<h6> and <hgroup>```

  - Phrasing content:  marl  label   q   button 

  - Embedded content: audio video 

  - Interactive content: button select 

  - Palpable content:  Content is palpable when it's neither empty nor hidden;

  - Form-associated content: inside *form*

https://developer.mozilla.org/ru/docs/Web/HTML/Content_categories


###  What is canvas and SVG 

 - canvas:  HTML5 element for drawing graphics.
   Raster graphics. No file format. Has events. For graphics.
   Pro: can be saved in PNG/JPG good for Raster graphics.

 - SVG: xml for 2D vector graphics, for stand and animated graphics.
   .svg file format.
   No events.  
   Pro: Images not depending on resolution.
          good animation
          xml format
   Contra: 
          slow speed for complex images

https://habr.com/ru/companies/ruvds/articles/476292/   https://habr.com/ru/companies/simbirsoft/articles/332750/


###  autocomplete attribute 

The autocomplete attribute specifies whether a form or an input field should have autocomplete on or off.

Autocomplete allows the browser to predict the value. When a user starts to type in a field, 

The browser should display options to fill in the field, based on earlier typed values.


###  HTML element <output>

The *output* tag is used to represent the **result of a calculation** (like one performed by a script).
     
```<form oninput=result.value=parseInt(a.value)+parseInt(b.value)>```


###  Property valueAsNumber in HTML for form elements

For Form elements to parse string value from input as number. No need to use parseInt.


###  Contact links via using *href*

	```
   	<a  href="url">                    Simple link  
   	
	<a  href="url" download>           Download link
   	
	<a  href="url" target="">
   	
	<a  href="tel:+123-12-12">         Phone
   	
	<a  href="mailto:test@test.com">   Email client
   	
	<a  href="skype:test" >            Skype
	
	<a  href="#id" >                   id to which page will be scrolled onclick

	```


###  Link and target attribute

```
  target attribute:
     By default in the SAME tab or frame.
     _blank:   new TAB
     _parent:  parent frame or self if there is no parent
     _self:    current TAB
     _top:     aka _self
   
```

###  What is application cache in HTML5  

The current version of HTML5 introduces application cache, which means that a web application is cached, and accessible without an internet connection. 

Now we can make an offline web application that will run without an internet connection by just creating a manifest file in our application. 

```<html manifest="manifest.appcache">```

```
CACHE MANIFEST
# 23-01-2015 v0.1
/style.css
/logo.gif
/script.js
 
NETWORK:
*
 
FALLBACK:
/server/ /fallback.html
```


https://habr.com/ru/articles/151815/  [2012]    
https://habr.com/ru/companies/paysto/articles/254619/ [2015]
https://habr.com/ru/articles/788786/ [2024]  Cache API (ServiceWorker)


###  Useful tags                               
```
   <abbr> abbreviation  => show tooltip on mouseover  Ex: HTML

   <input list="list">   -> set connection with datalist
   <datalist id="list">  dropdown list
     <option>
     <option>

    Visualization of the values in diaposon:
   <meter value="20"  min="1"  max="100"  low="10" high="70">Progress</meter>
    - low, high: depending on these values element will change colors to show low/high

    Progress of the action:
   <progress  value="30" max="100"> 
     - always blue progress line

    Select with yellow some fragment of text
    <mark>Select</mark>

    HTML5 element and API for drawing graphics
    <canvas>
```


###  Universal attribute                       

Can be applyed to most of the tags
  - id 
  - class 
  - title               tootlip with text
  - style               inline style
  - contenteditable
  - spellcheck          for input textarea 
  - hidden 
  - tabindex            focus index order
  - dir                 direction: change text direction
  - land                include language 
                        for example quotes will be different for diff languages


###  Creating Collapsible Content

You can use the *details* and *summary* tags, when you want to include collapsible content on your web page.

The *details* tag creates a container for hidden content, while the *summary*  tag provides a clickable label to toggle the visibility of that content.

	```	
	<details>
  		<summary>Click to expand</summary>
  		<p>This content can be expanded or collapsed.</p>
	</details>

	```

###  Enhancing Dropdown Menus

You can use the *optgroup* tag to group related options in a *select* HTML tag.

	```
	<select>
		<optgroup label="Fruits">
			<option>Apple</option>
			<option>Banana</option>
			<option>Mango</option>
		</optgroup>
		<optgroup label="Vegetables">
			<option>Tomato</option>
			<option>Broccoli</option>
			<option>Carrot</option>
		</optgroup>
	</select>
	```

###  Defining Base URL for Relative Links

You can use the *base* tag to define the base URL for all relative URLs in a web page.

This is handy when you want to create a shared starting point for all relative URLs on a web page, 

making it easier to navigate and load resources.

	```
	<head>
		<base href="https://shefali.dev" target="_blank" />
	</head>
	<body>
		<a href="/blog">Blogs</a>
		<a href="/get-in-touch">Contact</a>
	</body>

	```

###  Managing Translation Features via translate attribute

You can use the *translate* attribute to specify whether the content of an element should be translated by the browser’s translation features.

	```
	<p translate="no">
	This text should not be translated.
	</p>
	```


## DOM

###  What is DOM
	
Document Object Model which browser builds in memory depending on parsing HTML code.

This is interface for communicating of the Javascript and page elements. Tree structure. 	

The DOM tree is the structure which contains parent/child/sibling elements in relation to each other. 


###  What is Event Propogation(распространение)

Propagation refers to how events travel through the Document Object Model (DOM) tree. Its a mechanism.

Propogates from window to the called element and event will *touched* all the parents of the called element. 

Three phases of the event Propogation:

 - 1. Capture phase (from root(window) to target element)
 
 - 2. Target (event reaches the target element)
 
 - 3. Bubbling phase ( return back from target to window, also raises events on all parents)


###  What is Event Delegation
	
Add just one event handler to the parent element, no need to add several listeners for all parent children.

Use the event.target and delegate the changes to it.


###  Difference between e.preventDefault and e.stopPropogation

 - preventDefault: stop(cancel) the event behaviour for the element
   
 - stopPropogation: cancel the bubbling of the event


###  Methods of search the elements in DOM

 - getElementById
 
 - getElementsByName

 - getElementsByTagName

 - getElementsByClassName

 - querySelector(css selectors) - first founded element

 - querySelectorAll(css selectors)


###  Difference between event.target and currentTarget

 - currentTarget tells us on which element the event was attached to or the element whose eventListener triggered the event. 
	
 - target tells where the event started.


###  Difference between event.stopPropogation and stopImmidiatePropogation

If event occurs in browser the bubbling mechanims also occurs.
From target elelent to its all parents. You can stop bubbling in every parent event handler..

 - stopPropogation: cancel bubbling BUT it will occur on current
	
 - stopImmidiatePropogation: cancel bubbling in current ALSO


###  Difference between event load and DOMContentLoaded

 - DOMContentLoaded:  css/images were NOT loaded, so it occurs BEFORE load event. Occur before *load*

 - load:  loaded html/css/images....
		
 - beforeUnload / Unload


###  Types of nodes in the DOM tree
   - ELEMENT_NODE            1      ```<div>  <span>``` 
   - ATTRIBUTE               2      "id" "type" 
   - TEXT                    3      Text inside element
   - CDATA_SECTION           4      Represents a CDATA section in a document (text that will NOT be parsed by a parser)
   - PROCESSING_INTSRUCTION  7      ```<?xml version="1.0"?>```
   - COMMENT                 8      ```<!-- -->```
   - DOCUMENT                9      window.document
   - DOCUMENT_TYPE          10      ```<!doctype>```
   - DOCUMENT_FRAGMENT      11   
      
The **DocumentFragment** interface represents a minimal document object that has no parent.

It is used as a lightweight version of Document that stores a segment of a document structure comprised of nodes just like a standard document. 

The key difference is due to the fact that the document fragment isn't part of the active document tree structure. 

Changes made to the fragment don't affect the document.

   https://habr.com/ru/articles/413287/   https://javascript.ru/optimize/documentfragment-0


   - ENTITY_REFERENCE        5  (!!! legacy)
   - ENTITY                  6  (!!! legacy)
   - NOTATION               12  (!!! legacy)

  
###  Difference between HTMLElement and Node
 
 - Element: only html element

 - Node: anything within the document (elements, texts, comments)

https://www.youtube.com/watch?v=rhvec8cXLlo


###  How to move via the DOM tree

 - for all types of Nodes
                     parentNode  
      previousSibling  <=  DIV  => nextSibling
         fisrtChild  <= childNodes =>  lastChild

 - only for Elements
                             parentElement 
      previousElementSibling  <=  DIV  => nextElementSibling
         fisrtElementChild  <= children   =>   lastElementChild


###  Types of events in browser JS

 - Mouse       (click, mousemove, mouseover...)

 - Keyboard    (keydown, keypress, keyup)

 - Form        (submit, blur, focus, reset, change)

 - DragDrop    (dragstar, dragend, drag)  

 - Multimedia  

 - Touch  

 - Buffer  

 - Print   
 
 - Animation  

 - Frames/Window/Document    


###  How to add event handler for DOM element 

 - INLINE event handler     ```<button onclick="...">```
       You cannot set 2 event handlers

 - Event handler property  ```btn.onclick = functon...```
       You cannot set 2 event handlers
   
 - addEventListener        ```btn.addEventListener("click", callback)```
   
   addEventListener(eventType, listener, caprture / {options})
      - capture(default=false): If true, useCapture show that user wants to capture event. 
      - options object
                 - capture
                 - once   Boolean handler will be called only once. 
                          If *true*, handler will be automatically removed after call.
                 passive  true - handler will never call preventDefault(). 
   
   REMOVE:  removeEventListener("click", callback)


###  Difference between attribute and property DOM element

 - attribute: static value of the DOM element can be set in html

 - property: is calculated property of the element can be changeable. For ex:

   ``` 
   <input  type="text" value="hello world">
    
   input.getAttribute("value")  // 'hello world'
   input.value                  // 'hello world'
   
   // user changes input to "new text"
    
   input.getAttribute("value")  // 'hello world'
   input.value                  // 'new text'
   
   ```

###  Difference between HTMLCollection and NodeList

 - HTMLCollection: DYNAMIC collection of document elements. An HTMLCollection is always a live collection. 
        Ex: If you add a *li* element to a list in the DOM, the list in the HTMLCollection will change. 
        *getElementsByClassName*

 - NodeList: STATIC list of document nodes (element nodes, attributte nodes, and text nodes)
        Ex: If you add a *li* element to a list in the DOM, the list in NodeList will not change.
        *querySelectorAll*  


###  What is AJAX

Approach for creating async apps using cleint-server request-response.

Update web content without reloading the whole page.  Use XmlHttpRequest(legacy) or fetch.

Pro: 
 - dynamic add data from server without refreshing the whole page
   
 - decrease server calls
   
 - state of the page is not changed 

Contra: 
 - does not work without JS
    
 - dynamic content is not visible for some robots


###  How dynamically add elements to the HTML page
    
 - document.createElement
    
 - document.createTextNode
    
 - document.appendChild


###  Coordinates of the elements in browser

Axes start at the top-left part of the screen

Two coordinate systems:

-  Client coordinates (relative to browser window)
   clientLeft/Top/Width/Height


-  Page coordinates (relative to document)
   offsertLeft/Top/Width/Height

scrollLeft/Top/Height/Width

Main method:  getBoundingClientRect() return DOMRect with position and sizes.


https://habr.com/ru/companies/timeweb/articles/705552/ [2022]