(function()
{
 var Global=this,Runtime=this.IntelliFactory.Runtime,jQuery,UI,Next,Var,Submitter,Remoting,AjaxRemotingProvider,Concurrency,View,List,Doc,T,AttrProxy;
 Runtime.Define(Global,{
  WebSharper:{
   GoogleAuth:{
    Client:{
     Main:function()
     {
      var domNode,rvInput,submit,arg00,arg10,vReversed,arg20,arg201,arg202,arg203;
      domNode=jQuery("<h1>Hello worlf!</h1>").get(0);
      rvInput=Var.Create("");
      submit=Submitter.CreateOption(rvInput.get_View());
      arg00=function(_arg1)
      {
       return _arg1.$==1?AjaxRemotingProvider.Async("WebSharper.GoogleAuth:0",[_arg1.$0]):Concurrency.Delay(function()
       {
        return Concurrency.Return("");
       });
      };
      arg10=submit.get_View();
      vReversed=View.MapAsync(arg00,arg10);
      arg201=function()
      {
       return submit.Trigger();
      };
      arg202=Runtime.New(T,{
       $:0
      });
      arg203=List.ofArray([Doc.TextView(vReversed)]);
      arg20=List.ofArray([Doc.Input(Runtime.New(T,{
       $:0
      }),rvInput),Doc.Button("Send",Runtime.New(T,{
       $:0
      }),arg201),Doc.Element("hr",[],arg202),Doc.Element("h4",List.ofArray([AttrProxy.Create("class","text-muted")]),List.ofArray([Doc.TextNode("The server responded:")])),Doc.Element("div",List.ofArray([AttrProxy.Create("class","jumbotron")]),List.ofArray([Doc.Element("h1",[],arg203)])),Doc.Static(domNode)]);
      return Doc.Element("div",[],arg20);
     }
    }
   }
  }
 });
 Runtime.OnInit(function()
 {
  jQuery=Runtime.Safe(Global.jQuery);
  UI=Runtime.Safe(Global.WebSharper.UI);
  Next=Runtime.Safe(UI.Next);
  Var=Runtime.Safe(Next.Var);
  Submitter=Runtime.Safe(Next.Submitter);
  Remoting=Runtime.Safe(Global.WebSharper.Remoting);
  AjaxRemotingProvider=Runtime.Safe(Remoting.AjaxRemotingProvider);
  Concurrency=Runtime.Safe(Global.WebSharper.Concurrency);
  View=Runtime.Safe(Next.View);
  List=Runtime.Safe(Global.WebSharper.List);
  Doc=Runtime.Safe(Next.Doc);
  T=Runtime.Safe(List.T);
  return AttrProxy=Runtime.Safe(Next.AttrProxy);
 });
 Runtime.OnLoad(function()
 {
  return;
 });
}());
