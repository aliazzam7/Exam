//bi hayde el page JS el task li lezem wli badi e3malon bi javascript hene:

//function qui faire add de item ou sepecific(table aw legumes aw fruit) 
//ou general list(bi table li bi nos)

//function dleete item en 2 methode je veux faire(aw double click aw d'apres ecrire name of item dans le input+btn delete)

//function search qui faire search dans le 3 table 

//badi kone ana  meda5el data static w zide 3layhon  ana 


document.addEventListener('DOMContentLoaded', () => {
    const itemInput = document.getElementById('itemInput');
    const fruitList = document.getElementById('fruitList');
    const legumeList = document.getElementById('legumeList');
    const generalList = document.getElementById('generalList');
    const searchInput = document.getElementById('searchInput');
    const addSpecificButton = document.getElementById('addSpecific');
    const addGeneralButton = document.getElementById('addGeneral');
    const searchButton = document.getElementById('search');
    const deleteButton = document.getElementById('delete');

    function addItemToList(list, category, item) {
        const li = document.createElement('li');
        li.textContent = `${category}! - ${item}`;
        list.appendChild(li);

        // Add double-click event to delete the item
        li.addEventListener('dblclick', () => {
            li.remove();
        });
    }

    //if click sur le button specific
    addSpecificButton.addEventListener('click', () => {
        const item = itemInput.value.trim();
        const category = document.querySelector('input[name="category"]:checked');
        if (!item) {
            alert('Please enter an item');
            return;
        }
        if (!category) {
            alert('Please select a category');
            return;
        }
        if (category.value === 'fruit') {
            addItemToList(fruitList, 'Fruits', item);
        } else if (category.value === 'legume') {
            addItemToList(legumeList, 'Legumes', item);
        }
        itemInput.value = '';
    });

    //if click sur le button general 
    addGeneralButton.addEventListener('click', () => {
        const item = itemInput.value.trim();
        const category = document.querySelector('input[name="category"]:checked');
        if (!item) {
            alert('Please enter an item');
            return;
        }
        if (!category) {
            alert('Please select a category');
            return;
        }
        addItemToList(generalList, category.value === 'fruit' ? 'Fruits' : 'Legumes', item);
        itemInput.value = '';
    });

    //serach btn li bte3mal search men 5ilal text li bel  input  katabto ana 
    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.toLowerCase().trim();
        if (searchTerm) {
            const lists = document.querySelectorAll('.list li');
            lists.forEach(li => {
                if (li.textContent.toLowerCase().includes(searchTerm)) {
                    li.style.backgroundColor = '#ffff00'; // Highlight the matching item
                } else {
                    li.style.backgroundColor = '#e1e1e1'; // Reset background color
                }
            });
        }
    });

    //deleteButton 
    deleteButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.toLowerCase().trim();
        if (searchTerm) {
            const lists = document.querySelectorAll('.list li');
            lists.forEach(li => {
                if (li.textContent.toLowerCase().includes(searchTerm)) {
                    li.remove(); // Remove the matching item
                }
            });
        }
    });
});

