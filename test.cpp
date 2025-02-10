#include <iostream>
#include <vector>
using namespace std;

void printSubarrays(vector<int>& nums) {
    int n = nums.size();

    for(int i = 0; i < n; i++) {  // Start index
        for(int j = i; j < n; j++) {  // End index
            
            // Printing subarray from i to j
            for(int k = i; k <= j; k++) {
                cout << nums[k] << " ";
            }
            cout << endl;
        }
    }
}

int main() {
    vector<int> nums = {1, 2, 3,4,5,6,7,8,9};  // Example array
    printSubarrays(nums);
    return 0;
}
