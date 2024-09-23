const { test, expect } = require('@playwright/test');
// ประกาศตัวแปร
var user_id;

// การทดสอบ API Method Get
test('Get Users CI/CD', async ({ request }) => {
// การส่ง API แบบ get และเก็บใส่ตัวแปร response
 const response = await request.get('https://reqres.in/api/users/2')
//  console.log(response)
// การยืนยันหรือ Assertion
expect(response.status()).toBe(200)
});

// การทดสอบ API Method Post
test('Create Users CI/CD', async ({ request }) => {
    // การส่ง API แบบ post และเก็บใส่ตัวแปร response
     const response = await request.post('https://reqres.in/api/users',
        {
            data:{"name": "morpheus","job": "leader"},
            headers:{"Accept":"application/json"}   
        });
        expect(response.status()).toBe(201)
        // การเก็บค่า ID User ที่เพิ่งสร้างขึ้น
        var res = await response.json()
        user_id = res.id
});

// การทดสอบ API Method Put
test('Update Users CI/CD', async ({ request }) => {
    // การส่ง API แบบ put และเก็บใส่ตัวแปร response
     const response = await request.put('https://reqres.in/api/users/'+user_id,
        {
            data:{"name": "anutchai","job": "teacher"},
            headers:{"Accept":"application/json"}   
        });
        expect(response.status()).toBe(200)
});

// การทดสอบ API Method Delete
test('Delete Users CI/CD', async ({ request }) => {
    // การส่ง API แบบ delete และเก็บใส่ตัวแปร response
     const response = await request.delete('https://reqres.in/api/users/'+user_id);
        expect(response.status()).toBe(204)
});
