user_pref("_user.js.parrot", "base overrides: syntax error");


/*
 * RFP SETTINGS
 */
// 4504: enable RFP letterboxing
user_pref("privacy.resistFingerprinting.letterboxing", false); // [HIDDEN PREF]

/* 4520: disable chrome animations [FF77+] [RESTART]
 * [NOTE] pref added in FF63, but applied to chrome in FF77. RFP spoofs this for web content ***/
user_pref("ui.prefersReducedMotion", 0); // [HIDDEN PREF]


/*
 * [SETUP-*] TAGS
 */
// 0211: enforce US English locale regardless of the system locale
//user_pref("javascript.use_us_english_locale", false); // [HIDDEN PREF]

// 0801: disable location bar using search
user_pref("keyword.enabled", true);

// 0807: disable live search suggestions
user_pref("browser.search.suggest.enabled", true);
user_pref("browser.urlbar.suggest.searches", true);

// 1001: disable disk cache
user_pref("browser.cache.disk.enable", true);

// 1021: disable storing extra session data
user_pref("browser.sessionstore.privacy_level", 0);

// 1023: set the minimum interval between session save operations
user_pref("browser.sessionstore.interval", 15000);

// 1825: disable widevine CDM (Content Decryption Module)
user_pref("media.gmp-widevinecdm.visible", true);
user_pref("media.gmp-widevinecdm.enabled", true);

// 1830: disable all DRM content (EME: Encryption Media Extension)
user_pref("media.eme.enabled", true);

// 2302: disable service workers [FF32, FF44-compat]
user_pref("dom.serviceWorkers.enabled", true);

// 2305: disable Push Notifications [FF44+]
user_pref("dom.push.enabled", true);

// 2420: disable asm.js [FF22+]
user_pref("javascript.options.asmjs", true);

// 2422: disable WebAssembly [FF52+]
user_pref("javascript.options.wasm", true);

/* 2701: disable 3rd-party cookies and site-data [SETUP-WEB]
 * 0=Accept cookies and site data, 1=(Block) All third-party cookies, 2=(Block) All cookies,
 * 3=(Block) Cookies from unvisited websites, 4=(Block) Cross-site and social media trackers (FF63+) (default FF69+)
 * [NOTE] You can set exceptions under site permissions or use an extension
 * [NOTE] Enforcing category to custom ensures ETP related prefs are always honored
 * [SETTING] Privacy & Security>Enhanced Tracking Protection>Custom>Cookies ***/
user_pref("network.cookie.cookieBehavior", 4);
user_pref("browser.contentblocking.category", "strict");


/*
 * OTHERS FROM https://www.privacytools.io/browsers/#about_config
 */
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.socialtracking.enabled", true);


/*
 * PERSONAL PREFERENCES
 */

// 0102: set START page (0=blank, 1=home, 2=last visited page, 3=resume previous session)
user_pref("browser.startup.page", 1);

// 0103: set HOME+NEWWINDOW page
user_pref("browser.startup.homepage", "about:home");

// 0104: set NEWTAB page
user_pref("browser.newtabpage.enabled", true);
user_pref("browser.newtab.preload", true);

// 0105d: disable Activity Stream recent Highlights in the Library [FF57+]
user_pref("browser.library.activity-stream.enabled", false);

// disable autocopy default [LINUX]
user_pref("clipboard.autocopy", false); 

// 0901: disable saving passwords
user_pref("signon.rememberSignons", false);

// 2031: disable autoplay of HTML5 media if you interacted with the site [FF66+]
user_pref("media.autoplay.blocking_policy", 0);

// 2404: disable clipboard commands (cut/copy) from "non-privileged" content [FF41+]
user_pref("dom.allow_cut_copy", true);

// Disable smooth scrolling
user_pref("general.smoothScroll", false);

// Disable Pocket
user_pref("extensions.pocket.enabled", false);

// Disable Firefox Accounts
user_pref("identity.fxaccounts.enabled", false);

// Disable "what's new"
user_pref("browser.messaging-system.whatsNewPanel.enabled", false); 


/*
 * THEMING 
 */

// Enable userchrome.css, usercontent.css
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Fill SVG Color
user_pref("svg.context-properties.content.enabled", true);

// CSS Blur Filter [FF88+]
user_pref("layout.css.backdrop-filter.enabled", true);

// Show compact mode option
user_pref("browser.compactmode.show", true);


user_pref("_user.js.parrot", "SUCCESS: No no he's not dead, he's, he's restin'!");
