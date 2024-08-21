Burpy v0.1
===========

This portable python tool,parses Burp Suite (http://portswigger.net) log and performs 
series of tests and finally generate HTML report.


		aaryan@kali:~/burpy$ python2 burpy.py 

                         ____                                             ___  __ 
                        |  _ \                                           / _ \/_ |
                        | |_) |_   _ _ __ _ __  _   _   ______  __   __ | | | || |
                        |  _ <| | | | '__| '_ \| | | | |______| \ \ / / | | | || |
                        | |_) | |_| | |  | |_) | |_| |           \ V /  | |_| || |
                        |____/ \__,_|_|  | .__/ \__, |            \_/    \___(_)_|
                                         | |     __/ |                            
                                         |_|    |___/      

            Burpy v0.1 Portable and Flexible Web Application Security Scanner
		[+] Error!! You have missed a mandatory option

		Usage: burpy.py [options]
		
		Options:
    		-h, --help         show this help message and exit
    		-t TARGET_DOMAIN   Target/Scan Scope domain - Its mandatory option
    		-l BURP_SUITE_LOG  Full path to burp suite log - Its mandatory option
    		-s SSL             Use of SSL on or off - Its mandatory option
		aaryan@kali:~/burpy$ 



I have included one raw http request manipulation library (rawweb.py) here.
Using this library you can easily manipulate (Add remove headers , parameter ,change methods) raw 
http requests on the fly.