PROBLEMA:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

SOLUZIONE:
1 - Creare nel DOM un div da utilizzare come contenitore per i numeri da visualizzare
2 - Creare una funzione che generi numeri casuali da 0 a 9
3 - Utilizzare un ciclop for per creare una serie di 5 numeri generati randomaticamente dalla funzione precedente
    3.1 - inserire questi in un array 
    3.2 - Mostrare l'array crato a schermo nel dom con un timer di 5 secondi
4 - Creare un ciclo di richiesta di reinserimento delle cifre comparse a schermo da inserire individualmente
5 - Recuperare i dati inseriti dall'utente
6 - Creare una funzione di verifica per comparare gli imput all'array generato inizialmente
7 - Recuperare il risultato delle cifre che combaciano e quelle non presenti, e mandarlo a schermo