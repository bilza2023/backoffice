<script>
  // @ts-nocheck
  import { PageNav, PageNavBtn } from '$lib/cmp';
  import { Icons } from '$lib/util';

  import { visibleDialogStore } from './store';
import save from './fn/save';

  export let quiz;
  
  function toggleDialog(dialog) {
    if ($visibleDialogStore === dialog) {
      visibleDialogStore.set(null);
    } else {
      visibleDialogStore.set(dialog);
    }
  }
</script>

<PageNav>
  <PageNavBtn
    icon={Icons.SAVE}
    title="Save"
    tf={true}
    trueColor={"text-white"}
    clk={() =>save(quiz)}
  />

  <PageNavBtn
    icon={Icons.RUN}
    title="Run"
    tf={true}
    trueColor={"text-white"}
    clk={() => toggleDialog('runDlg')}
  />

  <PageNavBtn
    icon={"🐑"}
    title="Clone"
    tf={false}
    trueColor={"text-white"}
    falseColor={"text-gray-600"}
    clk={() => toggleDialog('cloneDlg')}
  />

  <PageNavBtn
    icon={"🗑️"}
    title="Delete"
    tf={false}
    trueColor={"text-white"}
    falseColor={"text-gray-600"}
    clk={() => toggleDialog('deleteDlg')}
  />
</PageNav>
