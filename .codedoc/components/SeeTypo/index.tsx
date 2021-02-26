import { ThemedComponentThis } from '@connectv/jss-theme';
import { RendererLike } from '@connectv/html';
import { transport } from "@connectv/sdh/transport";

export function SeeTypo(
  this: ThemedComponentThis,
  _: any,
  renderer: RendererLike<any, any>,
) {
  const hrefPrefix = "https://github.com/alemsabic/alemsorg/blob/master/docs/md"
  const pathname = window.location.pathname
  const hrefPostfix = ".md"
  const href = hrefPrefix + pathname + hrefPostfix
  return <blockquote><p><span class="icon-font" data-ignore-text="" style="vertical-align: sub">create</span> <strong>BRIŠI GREŠKE</strong></p><p>Ako nađeš grešku, a grešaka more, možeš <a href={href}>ovdje da ih izbrišeš</a>. Puno ti hvala. Ili dotjeraj malo stvari. :-)</p></blockquote>

}

export const SeeTypo$ = transport(SeeTypo);