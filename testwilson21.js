iiif ($proxyHost.length > 0 && $proxyPort != 0 && $capturePort != 0) {
	enableNetwork($proxyHost, $proxyPort, $capturePort);
}
setFailOnValidations(true);
setClientType($platformName);
setServerURL($serverURL);
setCapability("appPackage", $appPackage);
setCapability("appActivity", $appActivity);
setCapabilities($capabilities);
start();
try
 {
wait(15000);
click(byXPath("//android.widget.Button[@content-desc='My Profile, tab, 2 of 3']/android.view.ViewGroup/android.view.ViewGroup"));
click(byXPath("//android.widget.TextView[@text='PAYMENT INFO']"));
click(byXPath("//android.view.ViewGroup[@resource-id='loginScreen_createAccountSelectorButton']"));
var UserName = eval('\"Dynamite_Garage_US_'+ Math.floor(Math.random()*10000000)+'\"')+"@Dynamite.com"
setValue(byXPath("//android.widget.EditText[@text='Enter your email']"),UserName);
setValue(byXPath("//android.widget.EditText[@text='Enter your password']"),"Dynamite@123");
wait(10000);
setValue(byXPath("(//android.view.ViewGroup[@content-desc='loginScreen_emailContainer'])[2]/android.view.ViewGroup[1]/android.widget.EditText"),"7326174248");
click(byXPath("//android.view.ViewGroup[@content-desc='LoginFormView']/android.widget.CheckBox"));
click(byXPath("//android.view.ViewGroup[@content-desc='LoginFormView']/android.widget.CheckBox[2]"));
wait(10000);
click(byXPath("//android.view.ViewGroup[@content-desc='loginScreen_loginContainer']/android.view.ViewGroup[1]/android.view.ViewGroup"));
wait(30000);
hideKeyboard();
var Country = getText(byId("android:id/text1"));
assertEquals(Country,"United States");
click(byXPath("//android.widget.TextView[@resource-id='skip_profile']"));
click(byXPath("//android.widget.Button[@resource-id='shop']"));
click(byXPath("//*[contains(@text,'JEANS')]"));
click(byXPath("//android.widget.TextView[@text='GOT IT']"));
wait(5000);
click(byXPath("//*[contains(@text,'$')]"));
click(byXPath("//android.view.ViewGroup[@content-desc='size_options_swiper_container']/android.view.ViewGroup"));
click(byXPath("(//android.widget.Button[@content-desc='Size'])[7]"));
click(byXPath("//android.widget.TextView[@text='ADD TO BAG']"));
wait(10000);
click(byXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup[5]/android.view.ViewGroup"));
wait(10000);
click(byXPath("//android.view.ViewGroup[@content-desc='cart_checkout']/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView"));
assertExists(byXPath("//android.widget.TextView[@text='Where Can We Ship Your Order?']"));
var FirstName = eval('\"GarageTestUS'+ Math.floor(Math.random()*10000000)+'\"');
setValue(byXPath("//android.widget.EditText[@text='First Name']"),FirstName);
setValue(byXPath("//android.widget.EditText[@text='Last Name']"),"Test");
setValue(byXPath("//android.widget.EditText[@text='Address']"),"145 Brooklyn Ave 456");
click(byXPath("//android.widget.TextView[@text='Alabama']"));
click(byXPath("//android.widget.CheckedTextView[@text='New York']"));
setValue(byXPath("//android.widget.EditText[@text='City']"),"Brooklyn");
setValue(byXPath("//android.widget.EditText[@text='Zip Code']"),"11213-1900");
setValue(byXPath("//android.widget.EditText[@text='Phone Number']"),"(714)234-2345");
click(byXPath("//android.widget.TextView[@text='SAVE ADDRESS']"));
//click(byXPath("//android.widget.TextView[@text='Use this address']"));
wait(10000);
click(byXPath("//android.view.ViewGroup[@content-desc='cart_checkout']/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView"));
click(byXPath("//android.widget.TextView[@text='SELECT A PAYMENT METHOD']"));
assertExists(byXPath("//android.widget.TextView[@text='PLACE YOUR ORDER']"));
} finally
{
close();
}
disableNetwork();