
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=https://fonts.googleapis.com/css?family=Lato:300,400,700,900" rel="stylesheet" />
          <script src="https://snippets.freshchat.com/js/fc-pre-chat-form-v2.min.js"></script>
          <script src="https://wchat.freshchat.com/js/widget.js" async></script>
          <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5VWCWVW');`}}></script>
 <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-185043489-2', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />

<script  dangerouslySetInnerHTML={{
              __html: `  function initFreshChat() {
    window.fcWidget.init({
      token: "025be075-50c9-4913-aab8-63f98c40c0cd",
      host: "https://wchat.in.freshchat.com"
    });
  }
  function initialize(i,t){var e;i.getElementById(t)?initFreshChat():((e=i.createElement("script")).id=t,e.async=!0,e.src="https://wchat.in.freshchat.com/js/widget.js",e.onload=initFreshChat,i.head.appendChild(e))}function initiateCall(){initialize(document,"Freshchat-js-sdk")}window.addEventListener?window.addEventListener("load",initiateCall,!1):window.attachEvent("load",initiateCall,!1);`,
}} />


<script  dangerouslySetInnerHTML={{
              __html: `  
(var preChatTemplate = {
    //Form header color and Submit button color.
    mainbgColor: '#0aa4db',
    //Form Header Text and Submit button text color.
    maintxColor: '#fff',
    //Chat Form Title
    heading: 'Shop The World',
    //Chat form Welcome Message
    textBanner: 'We can\'t wait to talk to you. But first, please take a couple of moments to tell us a bit about yourself.',
    //Submit Button Label.
    SubmitLabel: 'Start Chat',
    //Fields List - Maximum is 5
    //All the values are mandatory and the script will not work if not available.
    fields : {
      field1 : {
        //Type can be either text or title
        type: "title",
        //Label for Field Title, can be in any language
        label: "Title",
        //Field ID for Title
        fieldId: "title",
        //Required "yes" or "no"
        required: "yes",
        //Error text to be displayed
        error: "Please Enter a valid Title"
      },
      field2 : {
        //Type for Name - Do not Change
        type: "name",
        //Label for Field Name, can be in any language
        label: "Name",
        //Default - Field ID for Name - Do Not Change
        fieldId: "name",
        //Required "yes" or "no"
        required: "yes",
        //Error text to be displayed
        error: "Please Enter a valid name"
      },
      field3 : {
        //Type for Email - Do Not Change
        type: "email",
        //Label for Field Email, can be in any language
        label: "Email",
        //Default - Field ID for Email - Do Not Change
        fieldId: "email",
        //Required "yes" or "no"
        required: "yes",
        //Error text to be displayed
        error: "Please Enter a valid Email"
      },
      field4 : {
        //Type for Phone - Do Not Change
        type: "phone",
        //Label for Field Phone, can be in any language
        label: "Phone",
        //Default - Field ID for Phone - Do Not Change
        fieldId: "phone",
        //Required "yes" or "no"
        required: "yes",
        //Error text to be displayed
        error: "Please Enter a valid Phone Number"
      }
      
      }
    }
  };
  window.fcSettings = {
    token: "025be075-50c9-4913-aab8-63f98c40c0cd",
    host: "https://wchat.freshchat.com",
    config: {
      cssNames: {
        //The below element is mandatory. Please add any custom class or leave the default.
        widget: 'custom_fc_frame',
        //The below element is mandatory. Please add any custom class or leave the default.
        expanded: 'custom_fc_expanded'
      }
    },
    onInit: function() {
      console.log('widget init');
      fcPreChatform.fcWidgetInit(preChatTemplate);
    }
  };)
`,
            }}
          />



        </Head>
        <body>
        <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5VWCWVW"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument