describe('Bienvenido 1er Test', () => {

    it('Primera prueba', () =>{
        browser.url('https://demoqa.com/')

        //assert tittle

        expect(browser).toHaveTitle('ToolsQA')

    })


});