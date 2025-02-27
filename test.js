// Function to run tests
function runTests() {
    const results = [];

    try {
        // Test 1: Check if the title element exists
        const titleElement = document.getElementById('title');
        if (!titleElement) throw "Title element is missing";
        results.push("✅ Test 1 Passed: Title element exists");

        // Test 2: Check if button exists
        const button = document.getElementById('testButton');
        if (!button) throw "Button element is missing";
        results.push("✅ Test 2 Passed: Button element exists");

        // Test 3: Check if text changes on button click
        button.click();
        if (titleElement.innerText !== "Text Changed!") throw "Button click did not change text";
        results.push("✅ Test 3 Passed: Button click changes text");

    } catch (error) {
        results.push(`❌ Test Failed: ${error}`);
    }

    // Display results on the page
    document.getElementById("test-results").innerText = results.join("\n");
}

// Run tests after page loads
document.addEventListener("DOMContentLoaded", runTests);
