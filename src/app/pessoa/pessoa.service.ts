import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Pessoa } from '../core/model'

export class PessoaFiltro {
  pagina = 0;
  itensPorPagina = 10;
  nome: string;
}

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private http: HttpClient) { }

  pessoaUrl = 'http://localhost:8080/pessoa'

  pesquisar(filtro: PessoaFiltro): Promise<any> {
    let params = new HttpParams({
      fromObject: {
        page: filtro.pagina.toString(),
        size: filtro.itensPorPagina.toString()
      }
    });

    if (filtro.nome) {
      params = params.append('nome', filtro.nome);
    }

    return this.http.get<any>(`${this.pessoaUrl}`, { params })
      .toPromise()
      .then(response => {
        const pessoa = response.content;

        const resultado = {
          pessoa,
          total: response.totalElements
        }
        return resultado;
      });
  }

  adicionar(pessoa: Pessoa): Promise<Pessoa> {
    return this.http.post<Pessoa>(this.pessoaUrl, pessoa).toPromise();
  }

  atualizar(pessoa: Pessoa): Promise<Pessoa> {
    return this.http.put<Pessoa>(`${this.pessoaUrl}/${pessoa.id}`, pessoa)
      .toPromise()
      .then(response => {
        const pessoaAlterada = response;
        return pessoaAlterada;
      })
  }

  excluir(id: number): Promise<void> {
    return this.http.delete(`${this.pessoaUrl}/${id}`)
      .toPromise()
      .then(() => null);
  }

  buscarPorId(id: number): Promise<Pessoa> {
    return this.http.get<Pessoa>(`${this.pessoaUrl}/${id}`)
      .toPromise()
      .then(response => {
        const pessoa = response;
        return pessoa;
      });
  }

  listarTodaspessoa(): Promise<Pessoa[]> {
    return this.http.get<Pessoa[]>(`${this.pessoaUrl}/todas`)
      .toPromise();
  }
}
