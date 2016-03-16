namespace WebSharper.GoogleAuth

open WebSharper
open WebSharper.JavaScript
open WebSharper.JQuery
open WebSharper.UI.Next
open WebSharper.UI.Next.Client
open WebSharper.UI.Next.Html

[<JavaScript>]
module Client =

    let Main () =

        let html =
            "<html lang=\"en\">
  <head>
    <meta name=\"google-signin-scope\" content=\"profile email\">
    <meta name=\"google-signin-client_id\" content=\"YOUR_CLIENT_ID.apps.googleusercontent.com\">
    <script src=\"https://apis.google.com/js/platform.js\" async defer></script>
  </head>
  <body>
    <div class=\"g-signin2\" data-onsuccess=\"onSignIn\" data-theme=\"dark\"></div>
    <script>
      function onSignIn(googleUser) {
        // Useful data for your client-side scripts:
        var profile = googleUser.getBasicProfile();
        console.log(\"ID: \" + profile.getId()); // Don't send this directly to your server!
        console.log(\"Name: \" + profile.getName());
        console.log(\"Image URL: \" + profile.getImageUrl());
        console.log(\"Email: \" + profile.getEmail());

        // The ID token you need to pass to your backend:
        var id_token = googleUser.getAuthResponse().id_token;
        console.log(\"ID Token: \" + id_token);
      };
    </script>
  </body>
</html>"
        let html = "<h1>Hello worlf!</h1>"
        let domNode = JQuery.Of(html).Get(0)
        //Doc.Static(domNode :?> _)
        //|> Doc.RunById "main"



        let rvInput = Var.Create ""
        let submit = Submitter.CreateOption rvInput.View
        let vReversed =
            submit.View.MapAsync(function
                | None -> async { return "" }
                | Some input -> Server.DoSomething input
            )
        div [
            Doc.Input [] rvInput
            Doc.Button "Send" [] submit.Trigger
            hr []
            h4Attr [attr.``class`` "text-muted"] [text "The server responded:"]
            divAttr [attr.``class`` "jumbotron"] [h1 [textView vReversed]]
            Doc.Static(domNode :?> _)
        ]
