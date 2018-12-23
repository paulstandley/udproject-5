/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */

$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */

    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        /* test loops through each feed
          in allFeeds object and ensures it has a URL defined
          and that the URL is not empty.
         */

        it("all url and names are defined and are not empty", function() {
            for(let indexURL in allFeeds) {
                expect(allFeeds[indexURL].url).toBeDefined();
                expect(allFeeds[indexURL].url.length).not.toBe(0);
            }
        });
        /* test that loops through each feed
          in allFeeds object and ensures it has a name defined
          and that the name is not empty.
         */

        it("all names are defined and are not empty", function() {
            for(let indexNAME in allFeeds) {
                expect(allFeeds[indexNAME].name).toBeDefined();
                expect(allFeeds[indexNAME].name.length).not.toBe(0);
            }
        });

    });

    /* test suite named "The menu" */
    describe("The Menu", function() {
        let menuClass = document.getElementsByClassName("menu-hidden");
        let menuIcon = $('.menu-icon-link');
        
        /* test that ensures the menu element is
          hidden by default.
         */
        it(" element is hidden by default", function() {
            expect(menuClass).toBeDefined();
            expect(menuClass.length).toBe(1);
        });
        
         /* test that ensures the menu changes
           visibility when the menu icon is clicked two expectations the menu display when
           clicked and does it hide when clicked again.
          */
        it(" does the menu display when clicked ", function() {
            menuIcon.click();
            expect($("body").hasClass("menu-hidden")).not.toBe(true);
        });
        
        it(" does it hide when clicked again", function() {
            menuIcon.click();
            expect($("body").hasClass("menu-hidden")).toBe(true);
        });

    });
    /* test suite named "Initial Entries" */
    describe("Initial Entries",function() {
        
        beforeEach(function(done){
            loadFeed(0, done);
        });      
        /* test that ensures when the loadFeed
          function is called and completes its work, there is at least
          a single .entry element within the .feed container.
         */
    
        it(" there is at least a single entry", function() {
            let newList = $(".feed .entry").length;
            expect(newList).toBeGreaterThan(0);
        });
        
        });
    
        /* test suite named "New Feed Selection" */
        describe("New Feed Selection",function() {
        
        /* test that ensures when a new feed is loaded
          by the loadFeed function that the content actually changes.
         */
        /* this last one inspired by envincebal on git hub io https://envincebal.github.io/feedreader-testing/ nice one invincebal */
        let one,two;
       
        beforeAll(function(done){
    /* beforall to make sure dom has loaded. Load the first feed and callback function to call .feed and asingn it to one do the same for the sceond feed then compare */
            loadFeed(1, function(){
                one = document.querySelector(".feed").innerHTML;
                loadFeed(2, function(){
                two = document.querySelector(".feed").innerHTML;
                done();
                });
            });
        });
    
            it(" the content actually changes", function(done){
                expect(one).not.toEqual(two);
                done();
            });
        });
    
        describe("Check for errors", function() {
            /* Test all variables for underfined null NaN and type  */
            let testingType = false,testingArray = false;
            beforeEach(function(done) {
                if(this.indexURL != undefined || this.indexURL != undefined || this.menuIcon != undefined || this.menuClass != undefined || this.newList != undefined || this.one != undefined || this.two != undefined) {
                    testingType = true;
                }
                if(this.indexURL != null || this.indexURL != null || this.menuIcon != null || this.menuClass != null || this.newList != null ) {
                    testingType = true;
                }
                if(this.indexName == NaN || this.indexURL == NaN || this.one == NaN || this.two == NaN) {
                    testingType = true;
                }
                if(this.indexName === typeof Number || this.indexURL === typeof Number || this.one === typeof Number || this.two === typeof Number || this.newList === typeof HTMLElement || this.menuClass === typeof HTMLElement || this.menuIcon === typeof HTMLElement) {
                    testingType = true;
                }
                /* check index variables for out of bounds array access */
                if(this.indexName >= allFeeds.length && -0 >= allFeeds.length || this.indexURL >= allFeeds.length && -0 >= allFeeds.length) {
                    testingArray = true;
                }
                done();                 
            });
           
            it(" variables are defined and of correct type", function() {
                expect(testingType).toBe(false);
            });
            
            it(" out-of-bound array access", function() {
                expect(testingArray).toBe(false);
            })
          });
          
    }());
    
  


/* https://review.udacity.com/?utm_medium=email&utm_campaign=ret_000_auto_ndxxx_submission-reviewed&utm_source=blueshift&utm_content=reviewsapp-submission-reviewed&bsft_clkid=35c04969-e0e0-49eb-b613-a3319f1ba56d&bsft_uid=ed91580d-4503-417b-b860-9958e533e56f&bsft_mid=a342fa62-290b-42fe-867e-3dd231f168ec&bsft_eid=6f154690-7543-4582-9be7-e397af208dbd&bsft_txnid=5f91f391-9509-490b-a7a3-f2e520af1699#!/reviews/1284823 */ 